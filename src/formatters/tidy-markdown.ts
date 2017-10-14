'use strict';

import vscode = require('vscode');
import tidyMarkdown = require('tidy-markdown');
import { Formatter } from './Formatter'

export class TidyMarkdownFormatter extends Formatter {

    public url: string;

    constructor() {
        super();
        this.url = 'https://github.com/slang800/tidy-markdown';
    }

    public getDocumentFormattingEdits(document: vscode.TextDocument): Thenable<vscode.TextEdit[]> {
        // let config = vscode.workspace.getConfiguration('tidy-markdown', document.uri);

        let options = {

        };

        return this.getEdits(document.getText(), tidyMarkdown(document.getText(), options));
    }
}
