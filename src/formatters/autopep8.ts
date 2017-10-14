'use strict';

import vscode = require('vscode');
import path = require('path');
import { getBinPath } from './../util';
import { Formatter } from './Formatter'
import { Executable } from './executable'

export class Autopep8Formatter extends Formatter {

    private exe: Executable;

    constructor() {
        super();

        this.exe = new Executable({
            name: 'autopep8',
            cmd: getBinPath('autopep8'),
            homepage: 'https://github.com/hhatto/autopep8'
        });
    }

    public getDocumentFormattingEdits(document: vscode.TextDocument): Thenable<vscode.TextEdit[]> {

        let maxline = vscode.workspace.getConfiguration('autopep8', document.uri)['maxline'];

        // -d: use unified diff output
        let formatFlags = ['-d', '--max-line-length', maxline, document.fileName]

        return this.exe.run(formatFlags, {}, true)
            .then(str => this.getEditsFromDiff(str));

    }
}
