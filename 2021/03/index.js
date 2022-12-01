const { inputs } = require("./input");

const getGamma = (inputs) => {
    const binary = [];

    for (let i = 0; i < inputs[0].length; i++) {
        let cptZero = 0;
        let cptOne = 0;

        for (let j = 0; j < inputs.length; j++) {
            parseInt(inputs[j][i], 10) ? cptOne++ : cptZero++;
        }

        const res = cptOne > cptZero ? 1 : 0;

        binary.push(res)
    }

    return binary;
}
const getEpsilon = (inputs) => {
return  getGamma(inputs).map(bit => bit = 1 - bit );
}

const parseBinary = (binary) => {
    return parseInt(binary.join(''), 2);
}

const mostCommon = (bit, inputs, position) => {
    let cptZero = 0;
    let cptOne = 0;
    let res = null

    for (let j = 0; j < inputs.length; j++) {
        parseInt(inputs[j][position], 10) ? cptOne++ : cptZero++;
    }

    switch (bit) {
        case 1 :
            res = cptOne >= cptZero ? 1 : 0; // egalité pour les 1
            break;
        case 0 :
            res = cptOne > cptZero ? 1 : 0; // egalité pour les 0
            break;
    }

    return res;
}

const gamma = getGamma(inputs);
const epsilon = getEpsilon(inputs);
const binary = parseBinary(gamma) * parseBinary(epsilon);

console.log('Part one');
console.log('getGamma : ',  gamma);
console.log('getEpsilon : ',  epsilon);
console.log('parseBinary : ',  binary;

console.log('Part two');



exports.getGamma = getGamma
exports.getEpsilon = getEpsilon
exports.parseBinary = parseBinary