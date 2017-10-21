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

        let config = vscode.workspace.getConfiguration('formatter.sqlformat', document.uri)['config'];

        let args = [document.fileName];

        if (config['keyword_case'] !== 'unchanged')
            args.push('--keywords', config['keyword_case']);

        if (config['identifier_case'] !== 'unchanged')
            args.push('--identifiers', config['identifier_case']);

        args.push('--indent_width', config['indent_size']);

        if (config['reindent'] === true)
            args.push('--reindent');

        if (config['reindent_aligned'] === true)
            args.push('--reindent_aligned');
        if (config['space_around_operators'] === true)
            args.push('--use_space_around_operators');

        return this.exe.run(args, {}, true)
            .then(str => this.getEdits(document.getText(), str));

    }
}
