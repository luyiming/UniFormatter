'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { UniDocumentFormattingEditProvider, Formatter } from './formatter';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('code-formatter.run', () => {
        let formatter = new Formatter();
        formatter.formatDocument(vscode.window.activeTextEditor.document).then(edits => {
            let workspaceEdit = new vscode.WorkspaceEdit();
            workspaceEdit.set(vscode.window.activeTextEditor.document.uri, edits);
            vscode.workspace.applyEdit(workspaceEdit);
        }, err => {
            // Prompt for missing tool is located here so that the
            // prompts dont show up when formatting is run on save
            if (typeof err === 'string' && err.startsWith('Missing tool: ')) {
                vscode.window.showInformationMessage(err);
            } else {
                console.log(err);
            }
        });
    });

    context.subscriptions.push(disposable);

    context.subscriptions.push(vscode.languages.registerDocumentFormattingEditProvider('cpp', new UniDocumentFormattingEditProvider()));
}

// this method is called when your extension is deactivated
export function deactivate() {
}