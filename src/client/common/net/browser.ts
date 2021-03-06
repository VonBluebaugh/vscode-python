// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import * as child_process from 'child_process';
import * as os from 'os';

export function launch(url: string) {
    let openCommand: string | undefined;
    if (os.platform() === 'win32') {
        openCommand = 'explorer';
    } else if (os.platform() === 'darwin') {
        openCommand = '/usr/bin/open';
    } else {
        openCommand = '/usr/bin/xdg-open';
    }
    if (!openCommand) {
        console.error(`Unable to determine platform to launch the browser in the Python extension on platform '${os.platform()}'.`);
        console.error(`Link is: ${url}`);
    }
    child_process.spawn(openCommand, [url]);
}
