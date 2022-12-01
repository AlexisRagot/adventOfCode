const { inputs } = require("./input");

const SIZE_OF_GROUPS = 3;

const getIncrease = (inputs) => {
    if (!inputs || !Array.isArray(inputs)) {
        return 0;
    }

    let increase = 0;
    let previousValue = null;

    inputs.forEach((value) => {
        if (previousValue && value > previousValue) {
            increase++;
        }
        previousValue = value
    })

    return increase;
}

const getGroupValues = (inputs) => {
    const result = [];

    if (!inputs || !Array.isArray(inputs)) {
        return result;
    }

    for (let i = 0; i < inputs.length; i++) {
        result[i] = inputs[i]

        for (let j = 1; j < SIZE_OF_GROUPS; j++) {
            if (inputs[i+j]) {
                result[i] += inputs[i+j]
            }
        }
    }

    return result;
}

console.log('part one : ', getIncrease(inputs));
console.log('part two : ', getIncrease(getGroupValues(inputs)));

exports.getIncrease = getIncrease