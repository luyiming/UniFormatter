'use strict';

import vscode = require('vscode');
import path = require('path');
import fs = require('fs');
import cp = require('child_process');
import { getBinPath } from './../util';
import { Formatter } from './Formatter'

export class BeautyshFormatter extends Formatter {
    public supporttedLanguages: string[];
    public url: string;
    public formatTool: string;

    constructor() {
        super();
        this.supporttedLanguages = ['shellscript'];
        this.url = 'https://github.com/bemeurer/beautysh';
        this.formatTool = 'beautysh';
    }

    public getDocumentFormattingEdits(document: vscode.TextDocument): Thenable<vscode.TextEdit[]> {
        let formatToolBinPath = getBinPath(this.formatTool);

        let indentSize = vscode.workspace.getConfiguration('beautysh', document.uri)['indentSize'];

        // create backup file, because `beautysh` will modify the file in place
        let backupFile = document.fileName + '.tmp';
        fs.createReadStream(document.fileName).pipe(fs.createWriteStream(backupFile));

        let formatFlags = ['--indent-size', indentSize, '--files']

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
