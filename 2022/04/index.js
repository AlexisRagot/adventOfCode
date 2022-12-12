const { inputs } = require("./input");

// part 1
const run = (inputs) => {
    let nbPairs = 0
    inputs.forEach(input => {
        const flatRange = input.replaceAll('-', ',').split(',').map(item => parseInt(item))
        if (flatRange[0] <= flatRange[2] && flatRange[1] >= flatRange[3]) {
            nbPairs++
        } else if (flatRange[2] <= flatRange[0] && flatRange[3] >= flatRange[1]) {
            nbPairs++
        }
    })

    return nbPairs
}

console.log('result : ',  run(inputs));

exports.run = run