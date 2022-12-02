const { inputs } = require("./input");

const HAND_WIN_SCORE = {
    A: 2,
    B: 3,
    C: 1,
}
const HAND_DRAW_SCORE = {
    A: 1,
    B: 2,
    C: 3,
}
const HAND_LOST_SCORE = {
    A: 3,
    B: 1,
    C: 2,
}

const WIN_SCORE = 6
const DRAW_SCORE = 3

// part 2
const run = (inputs) => {
    let totalScore = 0
    inputs.forEach((input) => {
        switch (input[2]) {
            case 'X' : // must lost
                totalScore += HAND_LOST_SCORE[input[0]]
                break;
            case 'Y' : // must draw
                totalScore += HAND_DRAW_SCORE[input[0]] + DRAW_SCORE
                break;
            case 'Z' : // must win
                totalScore += HAND_WIN_SCORE[input[0]] + WIN_SCORE
                break;
        }
    })
    return totalScore
}


console.log('result : ',  run(inputs));

exports.run = run