const { inputs } = require("./input");

// part 2
const run = (inputs) => {
    let nbOverlaps = 0
    inputs.forEach(input => {
        const flatRange = input.replaceAll('-', ',').split(',').map(item => parseInt(item))
        if ((flatRange[2] >= flatRange[0] && flatRange[2] <= flatRange[1])
        || (flatRange[0] >= flatRange[2] && flatRange[0] <= flatRange[3])) {
            nbOverlaps++
        }
    })

    return nbOverlaps
}

console.log('result : ',  run(inputs));

exports.run = run