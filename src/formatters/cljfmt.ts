'use strict';

import vscode = require('vscode');
import path = require('path');
import fs = require('fs');
import { Formatter } from './Formatter'

export class CljfmtFormatter extends Formatter {
    public supporttedLanguages: string[];
    public url: string;
    public formatTool: string;

    constructor() {
        super();
        this.supporttedLanguages = ['clojure'];
        this.url = 'https://www.npmjs.com/package/node-cljfmt';
        this.formatTool = path.resolve(__dirname, "..", "..", "node_modules/.bin/cljfmt");
        if (process.platform === 'win32')
            this.formatTool += '.cmd';
    }

    public getDocumentFormattingEdits(document: vscode.TextDocument): Thenable<vscode.TextEdit[]> {
        let formatToolBinPath = this.formatTool;

        // create backup file, because `cljfmt` may modify the file in place
        let backupFile = document.fileName + '.tmp';
        fs.createReadStream(document.fileName).pipe(fs.createWriteStream(backupFile));

        let formatFlags = []

        return this._getEditsExternalInplace(document, formatToolBinPath, formatFlags, backupFile).then(result => {
            fs.unlink(backupFile, err => { if (err) console.log('error' + err) });
            return result;
        }, err => {
            if (typeof err === 'string' && err.startsWith(this.MissingToolError)) {
                vscode.window.showInformationMessage(`Could not find \'${path.basename(formatToolBinPath)}\'. The program may not be installed.`, 'More').then(selected => {
                    if (selected === 'More') {
                        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(this.url));
                    }
                });
            } else {
                vscode.window.showErrorMessage(err);
                console.log(err);
            }
            return [];
        });


    }
}
