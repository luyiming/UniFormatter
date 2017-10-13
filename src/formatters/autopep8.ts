'use strict';

import vscode = require('vscode');
import path = require('path');
import { getBinPath } from './../util';
import { Formatter } from './Formatter'

export class Autopep8Formatter extends Formatter {
    public supporttedLanguages: string[];
    public url: string;
    public formatTool: string;

    constructor() {
        super();
        this.supporttedLanguages = ['python'];
        this.url = 'https://github.com/hhatto/autopep8';
        this.formatTool = 'autopep8';
    }

    public getDocumentFormattingEdits(document: vscode.TextDocument): Thenable<vscode.TextEdit[]> {
        let formatToolBinPath = getBinPath(this.formatTool);

        let maxline = vscode.workspace.getConfiguration('autopep8', document.uri)['maxline'];

        // -d: use unified diff output
        let formatFlags = ['-d', '--max-line-length', maxline, document.fileName]

        return this._getEditsExternal(document, formatToolBinPath, formatFlags, {}, true).then(null, err => {
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
