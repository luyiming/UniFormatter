'use strict';

/**
 * This file is loaded by both the extension and debug adapter, so it cannot import 'vscode'
 */
import fs = require('fs');
import path = require('path');

export function getBinPathFromEnvVar(toolName: string, envVarValue: string, ext: string = '.exe'): string {
    toolName = correctBinname(toolName, ext);
    if (envVarValue) {
        let paths = envVarValue.split(path.delimiter);
        for (let i = 0; i < paths.length; i++) {
            let binpath = path.join(paths[i], toolName);
            if (fileExists(binpath)) {
                return binpath;
            }
        }
    }
    return null;
}

function correctBinname(binname: string, ext: string = '.exe') {
    if (process.platform === 'win32')
        return binname + ext;
    else
        return binname;
}

function fileExists(filePath: string): boolean {
    try {
        return fs.statSync(filePath).isFile();
    } catch (e) {
        return false;
    }
}

export function getBinPath(binname: string, ext: string = '.exe'): string {
    // Search PATH
    let pathFromPath = getBinPathFromEnvVar(binname, process.env['PATH'], ext);
    if (pathFromPath) {
        return pathFromPath;
    }

    // Else return the binary name directly (this will likely always fail downstream)
    return binname;
}

export function debug(...infos: string[]) {
    console.log('[debug] ' + infos.join(' '));
}