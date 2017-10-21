'use strict';

import vscode = require('vscode');
import fmt = require('coffee-fmt')
import { Formatter } from './Formatter'

export class CoffeeFmtFormatter extends Formatter {
    public url: string;

    constructor(languageId: string) {
        super(languageId);
        this.url = 'https://www.npmjs.com/package/coffee-fmt';
    }

    public getDocumentFormattingEdits(document: vscode.TextDocument): Thenable<vscode.TextEdit[]> {
        let config = vscode.workspace.getConfiguration('formatter.coffee-fmt.config', document.uri);

        let options = {
            tab: ' '.repeat(config['indent_size']),
            newLine: config['eol']
        };

        if (config['indent_style'] === 'tab') options.tab = '\t';

        let formattingStr: string;

        try {
            formattingStr = fmt.format(document.getText(), options);
        } catch (err) {
            console.log(err);
            vscode.window.showErrorMessage(err);
        }

        return this.getEdits(document.getText(), formattingStr);
    }
}
