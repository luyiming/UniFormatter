'use strict';

import vscode = require('vscode');
import path = require('path');
import { getBinPath } from './../util';
import { Formatter } from './Formatter'
import { Executable } from './executable'

export class LatexindentFormatter extends Formatter {

    private exe: Executable;

    constructor(languageId: string) {
        super(languageId);

        this.exe = new Executable({
            name: 'latexindent',
            cmd: getBinPath('latexindent'),
            homepage: 'https://github.com/cmhughes/latexindent.pl'
        });
    }

    public getDocumentFormattingEdits(document: vscode.TextDocument): Thenable<vscode.TextEdit[]> {

        let args = [document.fileName];

        return this.exe.run(args, {}, true)
            .then(str => this.getEdits(document.getText(), str));

    }
}
