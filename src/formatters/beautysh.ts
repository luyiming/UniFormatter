'use strict';

import vscode = require('vscode');
import path = require('path');
import fs = require('fs');
import { getBinPath } from './../util';
import { Formatter } from './Formatter'
import { Executable } from './executable'

export class BeautyshFormatter extends Formatter {

    public url: string;
    private exe: Executable;

    constructor() {
        super();
        this.url = 'https://github.com/bemeurer/beautysh';

        this.exe = new Executable({
            name: 'beautysh',
            cmd: getBinPath('beautysh'),
            homepage: 'https://github.com/bemeurer/beautysh'
        });
    }

    public getDocumentFormattingEdits(document: vscode.TextDocument): Thenable<vscode.TextEdit[]> {

        let indentSize = vscode.workspace.getConfiguration('beautysh', document.uri)['indentSize'];

        let args = ['--indent-size', indentSize, '--files']

        // create backup file, because `beautysh` may modify the file in place
        return this.tempFile("code-formatter-temp", document.getText())
            .then(tmpFilePath => this.exe.run([...args, tmpFilePath], {}, false).then(() => this.readFile(tmpFilePath)))
            .then(str => this.getEdits(document.getText(), str));
    }
}
