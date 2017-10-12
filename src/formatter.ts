'use strict';

import vscode = require('vscode');
import cp = require('child_process');
import path = require('path');
import { isDiffToolAvailable, getEdits, getEditsFromUnifiedDiffStr } from './diffUtils';
import { getBinPath } from './util';

const missingToolMsg = 'Missing tool: ';

export class Formatter {
    public formatDocument(document: vscode.TextDocument): Thenable<vscode.TextEdit[]> {
        return new Promise((resolve, reject) => {
            let filename = document.fileName;
            let formatterConfig = vscode.workspace.getConfiguration('clang-format', document.uri);
            // let formatTool = goConfig['formatTool'] || 'goreturns';
            let formatTool = 'clang-format'
            let formatCommandBinPath = getBinPath(formatTool);

            let formatFlags = ['-style=' + formatterConfig['style']] || [];
            console.log(formatFlags);

            // let canFormatToolUseDiff = goConfig['useDiffForFormatting'] && isDiffToolAvailable();
            let canFormatToolUseDiff = false;
            // if (canFormatToolUseDiff && formatFlags.indexOf('-d') === -1) {
            //     formatFlags.push('-d');
            // }

            // We ignore the -w flag that updates file on disk because that would break undo feature
            // if (formatFlags.indexOf('-w') > -1) {
            //     formatFlags.splice(formatFlags.indexOf('-w'), 1);
            // }

            let t0 = Date.now();
            // let env = getToolsEnvVars();
            let env = {};
            cp.execFile(formatCommandBinPath, [...formatFlags, filename], { env }, (err, stdout, stderr) => {
                try {
                    if (err && (<any>err).code === 'ENOENT') {
                        return reject(missingToolMsg + formatTool);
                    }
                    if (err) {
                        console.log(err);
                        return reject('Cannot format due to syntax errors.');
                    };
                    let textEdits: vscode.TextEdit[] = [];
                    let filePatch = canFormatToolUseDiff ? getEditsFromUnifiedDiffStr(stdout)[0] : getEdits(filename, document.getText(), stdout);

                    filePatch.edits.forEach((edit) => {
                        textEdits.push(edit.apply());
                    });

                    let timeTaken = Date.now() - t0;

                    console.log(timeTaken + 'ms');

                    return resolve(textEdits);
                } catch (e) {
                    reject('Internal issues while getting diff from formatted content');
                }
            });
        });
    }
}

export class UniDocumentFormattingEditProvider implements vscode.DocumentFormattingEditProvider {
    private formatter: Formatter;

    constructor() {
        this.formatter = new Formatter();
    }

    public provideDocumentFormattingEdits(document: vscode.TextDocument, options: vscode.FormattingOptions, token: vscode.CancellationToken): Thenable<vscode.TextEdit[]> {
        return document.save().then(() => {
            return this.formatter.formatDocument(document).then(null, err => {
                // Prompt for missing tool is located here so that the
                // prompts dont show up when formatting is run on save
                if (typeof err === 'string' && err.startsWith(missingToolMsg)) {
                    vscode.window.showInformationMessage(err);
                } else {
                    console.log(err);
                }
                return [];
            });
        });
    }
}
