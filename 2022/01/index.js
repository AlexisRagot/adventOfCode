const { inputs } = require("./input");

// part 1
const run = (inputs) => {
    if (!inputs || !Array.isArray(inputs) || !inputs.length) {
        return null;
    }

    let biggerElfValue = 0
    let currentElfValue = 0

    inputs.forEach((input) => {
        if (input === '') {
            currentElfValue = 0
        } else {
            currentElfValue += parseInt(input, 10)
        }
        biggerElfValue = currentElfValue > biggerElfValue ? currentElfValue : biggerElfValue
    })

    return biggerElfValue
}

// part 2
const run2 = (inputs) => {
    if (!inputs || !Array.isArray(inputs) || !inputs.length) {
        return null;
    }

    let elfsValues = []
    let currentElfValue = 0

    inputs.forEach((input) => {
        if (input === '') {
            elfsValues.push(currentElfValue)
            currentElfValue = 0
        } else {
            currentElfValue += parseInt(input, 10)
        }
    })
    elfsValues.push(currentElfValue)

    return elfsValues.sort((a, b) => b - a)
        .slice(0, 3)
        .reduce((acc, a) => acc + a, 0);
}

console.log('result : ',  run2(inputs));

exports.run = run
exports.run2 = run2