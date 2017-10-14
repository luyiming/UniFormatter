'use strict';

import vscode = require('vscode');
import path = require('path');
import { getBinPath } from './../util';
import { Formatter } from './Formatter'
import { Executable } from './executable'

export class RubyBeautifyFormatter extends Formatter {

    private exe: Executable;

    constructor() {
        super();

        this.exe = new Executable({
            name: 'ruby-beautify',
            cmd: getBinPath('ruby-beautify', '.bat'),
            homepage: 'https://github.com/erniebrodeur/ruby-beautify'
        });
    }

    public getDocumentFormattingEdits(document: vscode.TextDocument): Thenable<vscode.TextEdit[]> {

        return this.exe.run([document.fileName], {}, true)
            .then(str => this.getEdits(document.getText(), str));

    }
}
