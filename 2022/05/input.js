const path = require('path');
const fs = require('fs');

const inputs = fs
    .readFileSync(path.join(__dirname, 'puzzle.txt'), 'utf8')
    .toString()
    .split('\n\n');

const stacks = Array(9)
for (let i = 0; i < stacks.length; i++) {
    stacks[i] = []
}

inputs[0].split('\n').forEach(line => {
    let position = 1
    for (let i = 0; i < stacks.length; i++) {
        if (line.charAt(position).match(/[A-Z]/i)) {
            stacks[i].push(line.charAt(position))
        }
        position += 4
    }
})

const instructions = []
inputs[1].split('\n').forEach(line => {
    const splittedLine = line.split(' ')
    instructions.push([splittedLine[1], splittedLine[3], splittedLine[5]])
})

module.exports = {
    stacks,
    instructions,
};
