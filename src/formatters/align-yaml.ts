'use strict';

import vscode = require('vscode');
import align = require('align-yaml');
import { Formatter } from './Formatter'

export class AlignYamlFormatter extends Formatter {
    public supporttedLanguages: string[];
    public url: string;

    constructor() {
        super();
        this.supporttedLanguages = ['yaml'];
        this.url = 'https://www.npmjs.com/package/align-yaml';
    }

    public getDocumentFormattingEdits(document: vscode.TextDocument): Thenable<vscode.TextEdit[]> {
        let padding: number = vscode.workspace.getConfiguration('align-yaml', document.uri)['padding'];

        let formattingStr: string = align(document.getText(), padding);

        return this._getEditsFromStr(document.getText(), formattingStr).then(null, err => {
            console.log(err);
            vscode.window.showErrorMessage(err);
            return [];
        });
    }
}
