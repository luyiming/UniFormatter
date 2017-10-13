'use strict';

import vscode = require('vscode');
import path = require('path');
import { getBinPath } from './../util';
import { Formatter } from './Formatter'

export class ClangFormatFormatter extends Formatter {
    public supporttedLanguages: string[];
    public url: string;
    public formatTool: string;

    constructor() {
        super();
        this.supporttedLanguages = ['c', 'cpp', 'csharp', 'objective-c', 'java']; // D, Pawn, VALA
        this.url = 'https://clang.llvm.org/docs/ClangFormat.html';
        this.formatTool = 'clang-format';
    }

    public getDocumentFormattingEdits(document: vscode.TextDocument): Thenable<vscode.TextEdit[]> {
        let formatToolBinPath = getBinPath(this.formatTool);

        let formatterConfig = vscode.workspace.getConfiguration('clang-format', document.uri);
        let formatFlags = ['-style=' + formatterConfig['style']] || [];
        return this._getEditsExternal(document, 'x' + formatToolBinPath, formatFlags, {}).then(null, err => {
            if (typeof err === 'string' && err.startsWith(this.MissingToolError)) {
                vscode.window.showInformationMessage(`Could not find \'${path.basename(formatToolBinPath)}\'.The program may not be installed.`, 'More').then(selected => {
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
