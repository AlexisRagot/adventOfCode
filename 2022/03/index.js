const { inputs } = require("./input");

const splitAt = (index, xs) => [xs.slice(0, index), xs.slice(index)]
const POSITION_ALPHABET = " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

// part 1
const run = (inputs) => {
    let sumPriority = 0
    inputs.forEach((input) => {
        const [first, second] = splitAt(input.length / 2, input)
        Array.from(first).some(char => {
            if (second.includes(char)) {
                sumPriority += POSITION_ALPHABET.indexOf(second[second.indexOf(char)])
                return true
            }
        })
    })
    return sumPriority
}

console.log('result : ',  run(inputs));

exports.run = run