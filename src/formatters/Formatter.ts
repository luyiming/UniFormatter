'use strict';

import vscode = require('vscode');
import cp = require('child_process');
import { isDiffToolAvailable, getEdits, getEditsFromUnifiedDiffStr } from './../diffUtils';

export abstract class Formatter {

    public formatDocument() {
        this.getDocumentFormattingEdits(vscode.window.activeTextEditor.document).then(edits => {
            let workspaceEdit = new vscode.WorkspaceEdit();
            workspaceEdit.set(vscode.window.activeTextEditor.document.uri, edits);
            vscode.workspace.applyEdit(workspaceEdit);
        });
    }

    public abstract getDocumentFormattingEdits(document: vscode.TextDocument): Thenable<vscode.TextEdit[]>;

    protected _getDocumentFormattingEdits(document: vscode.TextDocument, formatToolBinPath: string, formatFlags: string[] = [], env: {} = {}, formatToolOutputUniDiff: boolean = false): Thenable<vscode.TextEdit[]> {
        return new Promise((resolve, reject) => {
            let filename = document.fileName;

            // let t0 = Date.now();

            cp.execFile(formatToolBinPath, [...formatFlags, filename], { env }, (err, stdout, stderr) => {
                try {
                    if (err && (<any>err).code === 'ENOENT') {
                        return reject('Missing tool.');
                    }
                    if (err) {
                        return reject('Cannot format due to syntax errors.');
                    };
                    let textEdits: vscode.TextEdit[] = [];
                    let filePatch = formatToolOutputUniDiff ? getEditsFromUnifiedDiffStr(stdout)[0] : getEdits(filename, document.getText(), stdout);

                    filePatch.edits.forEach((edit) => {
                        textEdits.push(edit.apply());
                    });

                    // let timeTaken = Date.now() - t0;

                    return resolve(textEdits);
                } catch (e) {
                    reject('Internal issues while getting diff from formatted content');
                }
            });
        });
    }
}