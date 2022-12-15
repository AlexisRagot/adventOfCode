const { inputs } = require("./input");

// part 1
const run = (signal) => {
    for (let i = 0; i < Array.from(signal).length - 4; i++) {
        if ([...new Set([signal[i], signal[i+1], signal[i+2], signal[i+3]])].length === 4) {
            return i+4
        }
    }

    return 0
}

console.log('result : ',  run(inputs));

exports.run = run