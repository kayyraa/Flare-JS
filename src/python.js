import { write, read, append } from "./filesystem.js"
import * as mathpot from "./mathpot.js"

function open(path, mode, data) {
    if (mode == "w") {
        return write(path, data);
    } else if (mode == "r") {
        return read(path);
    } else if (mode == "a") {
        return append(path, data);
    }
}

function emulator(path, code) {
    const { exec } = require('child_process');

    if (path.endsWith(".py")) {
        append(path, code);

        exec(path, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.error(`stderr: ${stderr}`);
                return;
            }

            const output = stdout;

            return output;
        });
    }
}

export { open, mathpot, emulator }