'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { UniDocumentFormattingEditProvider } from './formatter';
import { ClangFormatFormatter } from './formatters/clang-format'
import { AlignYamlFormatter } from './formatters/align-yaml'
import { Autopep8Formatter } from './formatters/autopep8'
import { BeautyshFormatter } from './formatters/beautysh'

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('code-formatter.run', () => {
        let formatter = new ClangFormatFormatter();
        formatter.formatDocument();
    });

    context.subscriptions.push(disposable);

    context.subscriptions.push(vscode.languages.registerDocumentFormattingEditProvider('cpp', new UniDocumentFormattingEditProvider(new ClangFormatFormatter())));
    context.subscriptions.push(vscode.languages.registerDocumentFormattingEditProvider('yaml', new UniDocumentFormattingEditProvider(new AlignYamlFormatter())));
    context.subscriptions.push(vscode.languages.registerDocumentFormattingEditProvider('python', new UniDocumentFormattingEditProvider(new Autopep8Formatter())));
    context.subscriptions.push(vscode.languages.registerDocumentFormattingEditProvider('shellscript', new UniDocumentFormattingEditProvider(new BeautyshFormatter())));
}

// this method is called when your extension is deactivated
export function deactivate() {
}