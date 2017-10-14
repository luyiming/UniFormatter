'use strict';

import vscode = require('vscode');
import Comb = require('csscomb');
import path = require('path');
import { Formatter } from './Formatter'

export class CSScombFormatter extends Formatter {

    public homepage: string;

    constructor() {
        super();
        this.homepage = 'https://github.com/csscomb/csscomb.js';
    }

    public getDocumentFormattingEdits(document: vscode.TextDocument): Thenable<vscode.TextEdit[]> {

        let comb = new Comb('zen');

        return comb.processString(document.getText())
            .then(str => this.getEdits(document.getText(), str), err => {console.log(err); return [];});
    }
}
