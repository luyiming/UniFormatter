'use strict';

import vscode = require('vscode');
import path = require('path');
import { getBinPath } from './../util';
import { Formatter } from './Formatter'
import { Executable } from './executable'

export class SQLFormatFormatter extends Formatter {

    private exe: Executable;

    constructor(languageId: string) {
        super(languageId);

        this.exe = new Executable({
            name: 'sqlformat',
            cmd: getBinPath('sqlformat'),
            homepage: 'https://github.com/andialbrecht/sqlparse'
        });
    }

    public getDocumentFormattingEdits(document: vscode.TextDocument): Thenable<vscode.TextEdit[]> {

        let args = [document.fileName, '-k', 'lower'];

        return this.exe.run(args, {}, true)
            .then(str => this.getEdits(document.getText(), str));

    }
}
