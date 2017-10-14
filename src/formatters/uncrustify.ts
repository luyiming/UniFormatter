'use strict';

import vscode = require('vscode');
import path = require('path');
import { getBinPath } from './../util';
import { Formatter } from './Formatter'
import { Executable } from './executable'

export class UncrustifyFormatter extends Formatter {

    private exe: Executable;

    constructor() {
        super();

        this.exe = new Executable({
            name: 'uncrustify',
            cmd: getBinPath('uncrustify'),
            homepage: 'https://github.com/uncrustify/uncrustify'
        });
    }

    public getDocumentFormattingEdits(document: vscode.TextDocument): Thenable<vscode.TextEdit[]> {

        let cfgFile = vscode.workspace.getConfiguration('uncrustify', document.uri)['config'];

        console.log(vscode.workspace.workspaceFolders[0].uri.fsPath);

        cfgFile = path.resolve(vscode.workspace.workspaceFolders[0].uri.fsPath, cfgFile);

        let args = ['-c', cfgFile, '-f', document.fileName]

        return this.exe.run(args, {}, true)
            .then(str => this.getEdits(document.getText(), str));
    }
}
