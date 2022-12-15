const { inputs } = require("./input");

// part 2
const run = (signal, uniqueSize) => {
    for (let i = 0; i < Array.from(signal).length - uniqueSize; i++) {
        const set = new Set()

        for (let j = 0; j < uniqueSize; j++) {
            set.add(signal[i+j])
        }
        if (set.size === uniqueSize) {
            return i + uniqueSize
        }
    }

    return uniqueSize
}

console.log('result : ',  run(inputs, 14));

exports.run = run