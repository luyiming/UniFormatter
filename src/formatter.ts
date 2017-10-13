'use strict';

import vscode = require('vscode');
import { Formatter } from './formatters/Formatter'
import { ClangFormatFormatter } from './formatters/ClangFormatFormatter'

export class UniDocumentFormattingEditProvider implements vscode.DocumentFormattingEditProvider {
    private formatter: Formatter;

    constructor() {
        this.formatter = new ClangFormatFormatter();
    }

    public provideDocumentFormattingEdits(document: vscode.TextDocument, options: vscode.FormattingOptions, token: vscode.CancellationToken): Thenable<vscode.TextEdit[]> {
        return document.save().then(() => this.formatter.getDocumentFormattingEdits(document));
    }
}
