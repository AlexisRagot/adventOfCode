const { inputs } = require("./input");

const POSITION_ALPHABET = " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

// part 2
const run = (inputs) => {
    let sumPriority = 0
    for (let i = 0; i < inputs.length; i=i + 3) {
        const commonChar = Array.from(inputs[i]).find(candidate => {
            if (!inputs[i+1].includes(candidate)) {
                return false
            }
            return inputs[i+2].includes(candidate);

        })
        sumPriority += POSITION_ALPHABET.indexOf(commonChar)
    }
    return sumPriority
}

console.log('result : ',  run(inputs));

exports.run = run