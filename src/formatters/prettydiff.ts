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

        let lang = 'auto';
        switch (document.languageId) {
            case 'csv': lang = 'csv'; break;
            case 'xml': lang = 'xml'; break;
            case 'html': lang = 'html'; break;
            case 'javascript': lang = 'javascript'; break;
            case 'json': lang = 'json'; break;
            case 'css': lang = 'css'; break;
            case 'less': lang = 'less'; break;
            case 'scss': lang = 'scss'; break;
            default: lang = 'auto';
        }

        let options = {
            mode: 'beautify',
            source: document.getText(),
            lang: lang
        };

        let str = prettydiff(options);

        return this.getEdits(document.getText(), str);
    }
}
