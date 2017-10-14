'use strict';

import vscode = require('vscode');
import align = require('align-yaml');
import { Formatter } from './Formatter'

export class AlignYamlFormatter extends Formatter {

    public homepage: string;

    constructor() {
        super();
        this.homepage = 'https://www.npmjs.com/package/align-yaml';
    }

    public getDocumentFormattingEdits(document: vscode.TextDocument): Thenable<vscode.TextEdit[]> {

        let padding: number = vscode.workspace.getConfiguration('align-yaml', document.uri)['padding'];

        return this.getEdits(document.getText(), align(document.getText(), padding));
    }
}
