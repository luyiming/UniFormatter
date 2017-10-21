'use strict';

import vscode = require('vscode');
import path = require('path');
import fs = require('fs');
import { Formatter } from './../Formatter'
import { Executable } from './../executable'

export class CljfmtFormatter extends Formatter {

    public url: string;
    private exe: Executable;

    constructor(languageId: string) {
        super(languageId);
        this.url = 'https://www.npmjs.com/package/node-cljfmt';

        let cmd = path.resolve(__dirname, "..", "..", "..", "node_modules/.bin/cljfmt");
        if (process.platform === 'win32')
            cmd += '.cmd';

        this.exe = new Executable({
            name: 'cljfmt',
            cmd: cmd,
            homepage: 'https://www.npmjs.com/package/node-cljfmt'
        });
    }

    public getDocumentFormattingEdits(document: vscode.TextDocument): Thenable<vscode.TextEdit[]> {
        // let formatPath = path.resolve(__dirname, "fmt.edn");
        // let args = ["--edn=" + formatPath];
        let args = [];

        // create backup file, because `cljfmt` may modify the file in place
        return this.tempFile("code-formatter-temp", document.getText())
            .then(tmpFilePath => this.exe.run([...args, tmpFilePath], {}, false).then(() => this.readFile(tmpFilePath)))
            .then(str => this.getEdits(document.getText(), str));
    }
}
