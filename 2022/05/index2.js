const { stacks, instructions } = require("./input");

// part 2
const run = (stacks, instructions) => {
    instructions.forEach(instruction => {
        const sliceValues = stacks[instruction[1] - 1].slice(0, instruction[0])
        for (let i = 0; i < instruction[0]; i++) {
            stacks[instruction[1] - 1].shift()
        }
        stacks[instruction[2]-1] = [...sliceValues, ...stacks[instruction[2]-1]]
    })

    return stacks.map(stack => stack[0])
}

console.log('result : ',  run(stacks, instructions));

exports.run = run