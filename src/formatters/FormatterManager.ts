'use strict';

import vscode = require('vscode');
import { debug } from './../util';
import { Formatter } from './Formatter'
import { AlignYamlFormatter } from './align-yaml'
import { Autopep8Formatter } from './autopep8'
import { BeautyshFormatter } from './beautysh'
import { ClangFormatFormatter } from './clang-format'
import { CljfmtFormatter } from './cljfmt/cljfmt'
import { CoffeeFmtFormatter } from './coffee-fmt'
import { TidyMarkdownFormatter } from './tidy-markdown'
import { CSScombFormatter } from './csscomb'
import { RubyBeautifyFormatter } from './ruby-beautify'
import { UncrustifyFormatter } from './uncrustify'
import { JSBeautifyFormatter } from './js-beautify'
import { PrettyDiffFormatter } from './prettydiff'
import { PugBeautifyFormatter } from './pug-beautify'
import { SQLFormatFormatter } from './sqlformat'
import { LatexindentFormatter } from './latexindent'

let supportedLanguages = {
    "bat": false, "bibtex": false, "clojure": true, "coffeescript": true,
    "c": true, "cpp": true, "csharp": false, "css": true, "dockerfile": false,
    "fsharp": false, "go": false, "groovy": false, "handlebars": false,
    "html": true, "ini": false, "java": false, "javascript": true,
    "json": true, "latex": true, "less": true, "lua": false,
    "makefile": false, "markdown": true, "objective-c": true, "objective-cpp": true,
    "perl": false, "perl6": false, "php": false, "powershell": false,
    "jade": true, "python": true, "r": false, "razor": false,
    "ruby": true, "rust": false, "scss": true, "sass": false,
    "shaderlab": false, "shellscript": true, "sql": true, "swift": false,
    "typescript": false, "tex": false, "vb": false, "xml": true,
    "xsl": false, "yaml": true
};

let supportedFormatters = {
    "align-yaml": AlignYamlFormatter,
    "autopep8": Autopep8Formatter,
    "beautysh": BeautyshFormatter,
    "clang-format": ClangFormatFormatter,
    "cljfmt": CljfmtFormatter,
    "coffee-fmt": CoffeeFmtFormatter,
    "tidy-markdown": TidyMarkdownFormatter,
    "CSScomb": CSScombFormatter,
    "ruby-beautify": RubyBeautifyFormatter,
    "uncrustify": UncrustifyFormatter,
    "js-beautify": JSBeautifyFormatter,
    "prettydiff": PrettyDiffFormatter,
    "pug-beautify": PugBeautifyFormatter,
    "sqlformat": SQLFormatFormatter,
    "latexindent": LatexindentFormatter
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
        let formatter: Formatter = new supportedFormatters[formatterId](languageId);
        formatter.formatDocument();
    }

    public dispose() {
        for (let lanId in supportedLanguages) {
            if (this.data[lanId].handler !== null) {
                this.data[lanId].handler.dispose();
                this.data[lanId].handler = null;
            }
        }
    }

    private updateConfig() {
        let disabledLanguage: string[] = vscode.workspace.getConfiguration("code-formatter", vscode.window.activeTextEditor.document.uri).get('disable');
        for (let lanId in supportedLanguages) {
            if (supportedLanguages[lanId] === true) {
                let formatterId: string = vscode.workspace.getConfiguration(lanId, vscode.window.activeTextEditor.document.uri).get('code-formatter');
                let disable = disabledLanguage.indexOf(lanId) > -1;

                if (disable) {
                    if (this.data[lanId].handler !== null) {
                        this.data[lanId].handler.dispose();
                        this.data[lanId].handler = null;
                    }
                    debug('disable language:', lanId);
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
                    this.data[lanId].handler = vscode.languages.registerDocumentFormattingEditProvider(lanId, new UniDocumentFormattingEditProvider(new supportedFormatters[formatterId](lanId)));
                    this.data[lanId].formatterId = formatterId;
                }
            }
        }
    }
}

class UniDocumentFormattingEditProvider implements vscode.DocumentFormattingEditProvider {

    constructor(private formatter: Formatter) {

    }

    public provideDocumentFormattingEdits(document: vscode.TextDocument, options: vscode.FormattingOptions, token: vscode.CancellationToken): Thenable<vscode.TextEdit[]> {
        return document.save().then(() => this.formatter.getDocumentFormattingEdits(document));
    }
}