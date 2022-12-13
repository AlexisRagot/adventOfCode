const { stacks, instructions } = require("./input");

// part 1
const run = (stacks, instructions) => {
    instructions.forEach(instruction => {
        for (let i = 0; i < instruction[0]; i++) {
            const crate = stacks[instruction[1] - 1].shift()
            stacks[instruction[2] - 1].unshift(crate)
        }
    })

    return stacks.map(stack => stack[0])
}

console.log('result : ',  run(stacks, instructions));

exports.run = run