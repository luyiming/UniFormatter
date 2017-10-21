'use strict';

import vscode = require('vscode');
import path = require('path');
import { getBinPath } from './../util';
import { Formatter } from './Formatter'
import { Executable } from './executable'

export class RubyBeautifyFormatter extends Formatter {

    private exe: Executable;

    constructor(languageId: string) {
        super(languageId);

        this.exe = new Executable({
            name: 'ruby-beautify',
            cmd: getBinPath('ruby-beautify', '.bat'),
            homepage: 'https://github.com/erniebrodeur/ruby-beautify'
        });
    }

    public getDocumentFormattingEdits(document: vscode.TextDocument): Thenable<vscode.TextEdit[]> {
        let config = vscode.workspace.getConfiguration('formatter.ruby-beautify.config', document.uri);

        let options = [];

        if (config['indent_style'] === 'tab')
            options.push('--tabs');
        else {
            options.push('--spaces');
            options.push('--indent_count', config['indent_size']);
        }

        return this.exe.run([...options, document.fileName], {}, true)
            .then(str => this.getEdits(document.getText(), str));

    }
}
