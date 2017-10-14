'use strict';

import vscode = require('vscode');
import fs = require('fs');
import path = require('path');
import promisify = require('js-promisify');
import temp = require('temp');
temp.track();
import { isDiffToolAvailable, getEdits, getEditsFromUnifiedDiffStr } from './../diffUtils';
import { debug } from './../util';

export abstract class Formatter {

    // implememted in subclass
    public abstract getDocumentFormattingEdits(document: vscode.TextDocument): Thenable<vscode.TextEdit[]>;

    // format current document
    public formatDocument() {
        this.getDocumentFormattingEdits(vscode.window.activeTextEditor.document).then(edits => {
            let workspaceEdit = new vscode.WorkspaceEdit();
            workspaceEdit.set(vscode.window.activeTextEditor.document.uri, edits);
            vscode.workspace.applyEdit(workspaceEdit);
        });
    }

    // get TextEdits from two strings
    protected getEdits(oldStr: string, newStr: string): Promise<vscode.TextEdit[]> {
        return new Promise((resolve, reject) => {
            if (oldStr == undefined || oldStr == "" || newStr == undefined || newStr == "")
                return resolve([]);
            try {
                let textEdits: vscode.TextEdit[] = [];

                let filePatch = getEdits("dontcare", oldStr, newStr);

                filePatch.edits.forEach((edit) => {
                    textEdits.push(edit.apply());
                });

                return resolve(textEdits);
            } catch (e) {
                vscode.window.showErrorMessage('[getEdits] Error while getting TextEdits from str');
                console.log('[getEdits] Error while getting TextEdits from str');
                resolve([]);
            }
        });
    }

    // get TextEdits from unified diff string
    protected getEditsFromDiff(unifiedDiffStr: string): Promise<vscode.TextEdit[]> {
        return new Promise((resolve, reject) => {
            if (unifiedDiffStr == undefined || unifiedDiffStr == "")
                return resolve([]);
            try {
                let textEdits: vscode.TextEdit[] = [];

                let filePatch = getEditsFromUnifiedDiffStr(unifiedDiffStr)[0];

                filePatch.edits.forEach((edit) => {
                    textEdits.push(edit.apply());
                });

                return resolve(textEdits);
            } catch (e) {
                vscode.window.showErrorMessage('[getEditsFromDiff] Error while getting TextEdits from str');
                console.log('[getEditsFromDiff] Error while getting TextEdits from str');
                resolve([]);
            }
        });
    }

    // Create temporary file
    protected tempFile(fileName: string = "code-formatter-temp", contents: string = "", ext: string = ""): Promise<string> {
        return new Promise((resolve, reject) => {
            // create temp file
            temp.open({ prefix: fileName, suffix: ext }, (err, info) => {
                debug('tempFile', fileName, err, info);
                if (err) return reject(err);
                fs.write(info.fd, contents, err => {
                    if (err) return reject(err);
                    fs.close(info.fd, (err) => {
                        if (err) return reject(err);
                        resolve(info.path);
                    });
                });
            });
        });
    }

    // Read file
    protected readFile(filePath: string): Promise<string> {
        return promisify(fs.readFile, [filePath, { encoding: 'utf8' }]);
    }
}