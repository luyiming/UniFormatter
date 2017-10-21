'use strict';

import vscode = require('vscode');
import jsbeautify = require('js-beautify');
import { Formatter } from './Formatter'

export class JSBeautifyFormatter extends Formatter {

    public homepage: string;

    constructor(languageId: string) {
        super(languageId);
        this.homepage = 'https://github.com/beautify-web/js-beautify';
    }

    public getDocumentFormattingEdits(document: vscode.TextDocument): Thenable<vscode.TextEdit[]> {

        let config = vscode.workspace.getConfiguration('formatter.js-beautify', document.uri)['config'];

        let options, beautifier;

        switch (document.languageId) {
            case 'javascript': case 'json':
              beautifier = jsbeautify.js_beautify;
              options = config['js'];
              break;
            case 'html':
              beautifier = jsbeautify.html_beautify;
              options = config['html'];
              break;
            case 'css':
              beautifier = jsbeautify.css_beautify;
              options = config['css'];
              break;
            default:
              beautifier = jsbeautify.js_beautify;
              options = {};
              break;
        }

        return this.getEdits(document.getText(), beautifier(document.getText(), options));
    }
}


