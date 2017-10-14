'use strict';

import vscode = require('vscode');
import prettydiff = require("prettydiff2");
import { Formatter } from './Formatter'

export class PrettyDiffFormatter extends Formatter {

    public homepage: string;

    constructor(languageId: string) {
        super(languageId);
        this.homepage = 'https://github.com/prettydiff/prettydiff';
    }

    public getDocumentFormattingEdits(document: vscode.TextDocument): Thenable<vscode.TextEdit[]> {

        let options = {
            mode: 'beautify',
            source: document.getText()
        };

        let str = prettydiff(options);

        return this.getEdits(document.getText(), str);
    }
}
