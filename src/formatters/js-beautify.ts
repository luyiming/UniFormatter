'use strict';

import vscode = require('vscode');
import align = require('align-yaml');
import jsbeautify = require('js-beautify');
import { Formatter } from './Formatter'

export class JSBeautifyFormatter extends Formatter {

    public homepage: string;
    private beautify;

    constructor(languageId: string) {
        super(languageId);
        switch (languageId) {
            case 'javascript': case 'json': this.beautify = jsbeautify.js_beautify; break;
            case 'html': this.beautify = jsbeautify.html_beautify; break;
            case 'css': this.beautify = jsbeautify.css_beautify; break;
            default: this.beautify = jsbeautify.js_beautify; break;
        }
        this.homepage = 'https://github.com/beautify-web/js-beautify';
    }

    public getDocumentFormattingEdits(document: vscode.TextDocument): Thenable<vscode.TextEdit[]> {

        let options = { indent_size: 4 };

        return this.getEdits(document.getText(), this.beautify(document.getText(), options));
    }
}


