'use strict';

import vscode = require('vscode');
import cp = require('child_process');
import path = require('path');

export class Executable {

    private name: string;
    private cmd: string;
    private homepage: string;

    constructor(args: { name: string, cmd: string, homepage: string }) {
        this.name = args.name;
        this.cmd = args.cmd;
        this.homepage = args.homepage;
    }

    // Run command-line interface command
    public run(args: string[] = [], env = {}, returnStdout = true): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            cp.execFile(this.cmd, args, env, (err, stdout, stderr) => {
                try {
                    if (err && (<any>err).code === 'ENOENT') {
                        return reject('Missing Tool');
                    }
                    if (err) {
                        return reject('Cannot format due to syntax errors.');
                    };
                    if (returnStdout)
                        return resolve(stdout);
                    else
                        return resolve('');
                } catch (e) {
                    reject('Internal issues while getting diff from formatted content');
                }
            });
        }).catch(err => {
            if (typeof err === 'string' && err.startsWith('Missing Tool')) {
                vscode.window.showInformationMessage(`Could not find \'${path.basename(this.cmd)}\'. The program may not be installed.`, 'More').then(selected => {
                    if (selected === 'More') {
                        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(this.homepage));
                    }
                });
            } else {
                vscode.window.showErrorMessage(err);
                console.log(err);
            }
            return undefined;
        });
    }

}