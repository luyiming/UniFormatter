'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { FormatterManager } from './formatters/FormatterManager';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // context.subscriptions.push(vscode.workspace.onDidOpenTextDocument(e => {
    //     console.log('onDidOpenTextDocument: ' + e.languageId + ' ' + e.fileName);
    // }));

    // console.log('visibleTextEditors: ');
    // for (let editor of vscode.window.visibleTextEditors) {
    //     console.log(editor.document.languageId + ' ' + editor.document.fileName);
    // }

    let formatterManager = new FormatterManager();

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json

    // let disposable = vscode.commands.registerCommand('uniformatter.format', () => {
    //     formatterManager.formatActiveDocument();
    // });

    context.subscriptions.push();
}

// this method is called when your extension is deactivated
export function deactivate() {
}