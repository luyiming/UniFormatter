'use strict';

import vscode = require('vscode');
import { Formatter } from './formatters/Formatter'
import { AlignYamlFormatter } from './formatters/align-yaml'
import { Autopep8Formatter } from './formatters/autopep8'
import { BeautyshFormatter } from './formatters/beautysh'
import { ClangFormatFormatter } from './formatters/clang-format'
import { CljfmtFormatter } from './formatters/cljfmt'
import { CoffeeFmtFormatter } from './formatters/coffee-fmt'
import { TidyMarkdownFormatter } from './formatters/tidy-markdown'

let supportedLanguages = {
    "bat": false, "bibtex": false, "clojure": true, "coffeescript": true,
    "c": true, "cpp": true, "csharp": false, "css": false,
    "diff": false, "dockerfile": false, "fsharp": false, "git-commit": false,
    "git-rebase": false, "go": false, "groovy": false, "handlebars": false,
    "html": false, "ini": false, "java": false, "javascript": false,
    "json": false, "latex": false, "less": false, "lua": false,
    "makefile": false, "markdown": true, "objective-c": false, "objective-cpp": false,
    "perl": false, "perl6": false, "php": false, "powershell": false,
    "jade": false, "python": true, "r": false, "razor": false,
    "ruby": false, "rust": false, "scss": false, "sass": false,
    "shaderlab": false, "shellscript": true, "sql": false, "swift": false,
    "typescript": false, "tex": false, "vb": false, "xml": false,
    "xsl": false, "yaml": true
};

let supportedFormatters = {
    "align-yaml": AlignYamlFormatter,
    "autopep8": Autopep8Formatter,
    "beautysh": BeautyshFormatter,
    "clang-format": ClangFormatFormatter,
    "cljfmt": CljfmtFormatter,
    "coffee-fmt": CoffeeFmtFormatter,
    "tidy-markdown": TidyMarkdownFormatter
};

export class FormatterManager {

    private data = { /* languageId: {handler: Disposable, formatterId: formatterId} */ };

    constructor() {
        for (let lanId in supportedLanguages) {
            this.data[lanId] = { handler: null, formatterId: null };
        }

        this.updateConfig();

        vscode.workspace.onDidChangeConfiguration(e => {
            this.updateConfig();
        });
    }

    public formatActiveDocument() {
        // TODO: optimize and error checking
        let languageId = vscode.window.activeTextEditor.document.languageId;
        let formatterId: string = vscode.workspace.getConfiguration(languageId, vscode.window.activeTextEditor.document.uri).get('code-formatter');
        if (formatterId === undefined) {
            vscode.window.showInformationMessage("missing formatter for language: " + languageId);
            return;
        }
        let formatter: Formatter = new supportedFormatters[formatterId]();
        formatter.formatDocument();
    }

    private updateConfig() {
        for (let lanId in supportedLanguages) {
            if (supportedLanguages[lanId] === true) {
                let formatterId: string = vscode.workspace.getConfiguration(lanId, vscode.window.activeTextEditor.document.uri).get('code-formatter');
                let enable: boolean = vscode.workspace.getConfiguration(lanId, vscode.window.activeTextEditor.document.uri).get("formatter-enable");

                if (enable === undefined) {
                    console.log('error: no enable option for ' + lanId);
                    continue;
                }

                if (enable === false) {
                    if (this.data[lanId].handler !== null) {
                        this.data[lanId].handler.dispose();
                        this.data[lanId].handler = null;
                    }
                    continue;
                }

                if (formatterId === undefined) {
                    console.log('missing formatter for ' + lanId);
                    continue;
                }

                if (supportedFormatters[formatterId] === undefined) {
                    console.log('missing formatter: ' + formatterId);
                    continue;
                }

                if (this.data[lanId].formatterId === null || this.data[lanId].formatterId !== formatterId) {
                    console.log(`[debug] ${this.data[lanId].formatterId} -> ${formatterId} for ${lanId}`);
                    if (this.data[lanId].handler !== null)
                        this.data[lanId].handler.dispose();
                    this.data[lanId].handler = vscode.languages.registerDocumentFormattingEditProvider(lanId, new UniDocumentFormattingEditProvider(new supportedFormatters[formatterId]()));
                    this.data[lanId].formatterId = formatterId;
                }
            }
        }
    }
}

export class UniDocumentFormattingEditProvider implements vscode.DocumentFormattingEditProvider {

    constructor(private formatter: Formatter) {

    }

    public provideDocumentFormattingEdits(document: vscode.TextDocument, options: vscode.FormattingOptions, token: vscode.CancellationToken): Thenable<vscode.TextEdit[]> {
        return document.save().then(() => this.formatter.getDocumentFormattingEdits(document));
        // let textEditor = vscode.window.activeTextEditor;
        // var firstLine = textEditor.document.lineAt(0);
        // var lastLine = textEditor.document.lineAt(textEditor.document.lineCount - 1);
        // var textRange = new vscode.Range(0,
        //     firstLine.range.start.character,
        //     textEditor.document.lineCount - 1,
        //     lastLine.range.end.character);
        // return new Promise((resolve, reject) => {
        //     resolve([vscode.TextEdit.delete(textRange)]);
        // });
    }
}