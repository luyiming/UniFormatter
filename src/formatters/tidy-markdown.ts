'use strict';

import vscode = require('vscode');
import tidyMarkdown = require('tidy-markdown');
import { Formatter } from './Formatter'

export class TidyMarkdownFormatter extends Formatter {
    public supporttedLanguages: string[];
    public url: string;

    constructor() {
        super();
        this.supporttedLanguages = ['markdown'];
        this.url = 'https://github.com/slang800/tidy-markdown';
    }

    public getDocumentFormattingEdits(document: vscode.TextDocument): Thenable<vscode.TextEdit[]> {
        // let config = vscode.workspace.getConfiguration('tidy-markdown', document.uri);

        let options = {

        };

        let formattingStr: string = tidyMarkdown(document.getText(), options);

        return this._getEditsFromStr(document.getText(), formattingStr).then(null, err => {
            console.log(err);
            vscode.window.showErrorMessage(err);
            return [];
        });
    }
}
