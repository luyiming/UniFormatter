'use strict';

import vscode = require('vscode');
import cp = require('child_process');
import fs = require('fs');
import { isDiffToolAvailable, getEdits, getEditsFromUnifiedDiffStr } from './../diffUtils';

type Params = {
    env?: object;
    formatToolOutputUniDiff?: boolean;
}

export abstract class Formatter {

    protected MissingToolError: string = 'Missing tool';

    public formatDocument() {
        this.getDocumentFormattingEdits(vscode.window.activeTextEditor.document).then(edits => {
            let workspaceEdit = new vscode.WorkspaceEdit();
            workspaceEdit.set(vscode.window.activeTextEditor.document.uri, edits);
            vscode.workspace.applyEdit(workspaceEdit);
        });
    }

    // implememted in subclass
    // error should be handled inside
    public abstract getDocumentFormattingEdits(document: vscode.TextDocument): Thenable<vscode.TextEdit[]>;

    protected _getEditsExternal(document: vscode.TextDocument, formatToolBinPath: string, formatFlags: string[] = [], params: Params = {}): Thenable<vscode.TextEdit[]> {
        return new Promise((resolve, reject) => {

            // let t0 = Date.now();

            // default values
            let { env = {}, formatToolOutputUniDiff = false } = params;

            cp.execFile(formatToolBinPath, formatFlags, env, (err, stdout, stderr) => {
                try {
                    if (err && (<any>err).code === 'ENOENT') {
                        return reject(this.MissingToolError);
                    }
                    if (err) {
                        return reject('Cannot format due to syntax errors.');
                    };
                    let textEdits: vscode.TextEdit[] = [];
                    let filePatch = formatToolOutputUniDiff ? getEditsFromUnifiedDiffStr(stdout)[0] : getEdits("dontcare", document.getText(), stdout);

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

    protected _getEditsFromStr(oldStr: string, newStr: string, UniDiffOutput: boolean = false): Thenable<vscode.TextEdit[]> {
        return new Promise((resolve, reject) => {

            try {
                let textEdits: vscode.TextEdit[] = [];
                let filePatch = UniDiffOutput ? getEditsFromUnifiedDiffStr(newStr)[0] : getEdits("dontcare", oldStr, newStr);

                filePatch.edits.forEach((edit) => {
                    textEdits.push(edit.apply());
                });

                resolve(textEdits);
            } catch (e) {
                reject('Internal issues while getting diff from formatted content');
            }

        });
    }

    protected _getEditsExternalInplace(document: vscode.TextDocument, formatToolBinPath: string, formatFlags: string[] = [], file: string, params: Params = {}): Thenable<vscode.TextEdit[]> {
        return new Promise((resolve, reject) => {

            // let t0 = Date.now();

            // default values
            let { env = {}, formatToolOutputUniDiff = false } = params;

            cp.execFile(formatToolBinPath, [...formatFlags, file], env, (err, stdout, stderr) => {
                try {
                    if (err && (<any>err).code === 'ENOENT') {
                        return reject(this.MissingToolError);
                    }
                    if (err) {
                        return reject('Cannot format due to syntax errors.');
                    };
                    let textEdits: vscode.TextEdit[] = [];

                    // TODO: use async
                    let data = fs.readFileSync(file).toString();

                    let filePatch = formatToolOutputUniDiff ? getEditsFromUnifiedDiffStr(data)[0] : getEdits("dontcare", document.getText(), data);

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