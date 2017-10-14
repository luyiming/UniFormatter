'use strict';

import vscode = require('vscode');
import pugBeautify = require('pug-beautify');
import { Formatter } from './Formatter'

export class PugBeautifyFormatter extends Formatter {

    public homepage: string;

    constructor(languageId: string) {
        super(languageId);
        this.homepage = 'https://www.npmjs.com/package/align-yaml';
    }

    public getDocumentFormattingEdits(document: vscode.TextDocument): Thenable<vscode.TextEdit[]> {

        /**
        fill_tab : true/false,default true, fill whether tab or space.
        omit_div : true/false,default false, whether omit 'div' tag.
        tab_size : number, default 4, when 'fill_tab' is false, fill 'tab_size' spaces.
         */
        var options = {
            fill_tab: false,
            omit_div: false,
            tab_size: 4
        };

        try {
            let str = pugBeautify(document.getText(), options);
            return this.getEdits(document.getText(), str);
        } catch (error) {
            console.log(error);
        }
    }
}
