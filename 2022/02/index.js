const { inputs } = require("./input");

const ELF_HAND_SCORE = {
    X: 1, // rock
    Y: 2, // paper
    Z: 3, // scissors
}

const OPPONENT_HAND_SCORE = {
    A: 1, // rock
    B: 2, // paper
    C: 3, // scissors
}

const WIN_SCHEMA = {
    X: 'C',
    Y: 'A',
    Z: 'B'
}

const WIN_SCORE = 6
const DRAW_SCORE = 3

// part 1
const run = (inputs) => {
    let totalScore = 0
    inputs.forEach((input) => {
        if (WIN_SCHEMA[input[2]] === input[0]) {
            totalScore += WIN_SCORE
        } else if (ELF_HAND_SCORE[input[2]] === OPPONENT_HAND_SCORE[input[0]]) {
            totalScore += DRAW_SCORE
        }
        totalScore += ELF_HAND_SCORE[input[2]]
    })
    return totalScore
}

console.log('result : ',  run(inputs));

exports.run = run