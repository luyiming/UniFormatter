'use strict';

import vscode = require('vscode');
import path = require('path');
import { getBinPath } from './../util';
import { Formatter } from './Formatter'
import { Executable } from './executable'

export class Autopep8Formatter extends Formatter {

    private exe: Executable;

    constructor(languageId: string) {
        super(languageId);

        this.exe = new Executable({
            name: 'autopep8',
            cmd: getBinPath('autopep8'),
            homepage: 'https://github.com/hhatto/autopep8'
        });
    }

    public getDocumentFormattingEdits(document: vscode.TextDocument): Thenable<vscode.TextEdit[]> {

        let indentSize = vscode.workspace.getConfiguration('formatter.autopep8', document.uri)['indentSize'];

        // -d: use unified diff output
        let formatFlags = ['-d', '--indent-size', indentSize, document.fileName]

                          return this.exe.run(formatFlags, {}, true)
                              .then(str => this.getEditsFromDiff(str));
    }
}
