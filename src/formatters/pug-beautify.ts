'use strict';

import vscode = require('vscode');
import pugBeautify = require('pug-beautify');
import { Formatter } from './Formatter'

export class PugBeautifyFormatter extends Formatter {

    public homepage: string;

    constructor(languageId: string) {
        super(languageId);
        this.homepage = 'https://www.npmjs.com/package/pug-beautify';
    }

    public getDocumentFormattingEdits(document: vscode.TextDocument): Thenable<vscode.TextEdit[]> {

        let config = vscode.workspace.getConfiguration('formatter.pug-beautify.config', document.uri);

        /**
        fill_tab : true/false,default true, fill whether tab or space.
        omit_div : true/false,default false, whether omit 'div' tag.
        tab_size : number, default 4, when 'fill_tab' is false, fill 'tab_size' spaces.
         */
        var options = {
            fill_tab: config['indent_style'] === 'tab',
            omit_div: config['omit_div'],
            tab_size: config['indent_size']
        };

        try {
            let str = pugBeautify(document.getText(), options);
            return this.getEdits(document.getText(), str);
        } catch (error) {
            console.log(error);
        }
    }
}
