'use strict';

import vscode = require('vscode');
import path = require('path');
import { getBinPath } from './../util';
import { Formatter } from './Formatter'
import { Executable } from './executable'

export class ClangFormatFormatter extends Formatter {

    public url: string;
    private exe: Executable;

    constructor(languageId: string) {
        super(languageId);
        this.url = 'https://clang.llvm.org/docs/ClangFormat.html';

        this.exe = new Executable({
            name: 'clang-format',
            cmd: getBinPath('clang-format'),
            homepage: 'https://clang.llvm.org/docs/ClangFormat.html'
        });
    }

    public getDocumentFormattingEdits(document: vscode.TextDocument): Thenable<vscode.TextEdit[]> {

        let formatterConfig = vscode.workspace.getConfiguration('clang-format', document.uri);
        let args = ['-style=' + formatterConfig['style'], document.fileName] || [document.fileName];

        return this.exe.run(args, {}, true)
            .then(str => this.getEdits(document.getText(), str));
    }
}
