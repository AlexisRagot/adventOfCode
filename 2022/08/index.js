const { inputs } = require("./input");

// part 1
const run = (inputs) => {
    let nbVisible = 0

    for (let i = 0; i < inputs.length; i++) {
        for (let j = 0; j < inputs[i].length; j++) {
            if (i === 0 || j === 0 || i === (inputs.length -1) || j === (inputs[i].length -1)) {
                nbVisible++
                continue
            }

            if (isVisibleByTop(inputs, i, j) || isVisibleByRight(inputs, i, j) || isVisibleByBottom(inputs, i, j) || isVisibleByLeft(inputs, i, j)) {
                nbVisible++
            }
        }
    }

    return nbVisible
}

const isVisibleByTop = (inputs, i, j) => {
    const treeSize = inputs[i][j]

    for (let verticalPos = i-1; verticalPos > -1; verticalPos--) {
        if (inputs[verticalPos][j] >= treeSize) {
            return false
        }
    }

    return true
}
const isVisibleByBottom = (inputs, i, j) => {
    const treeSize = inputs[i][j]

    for (let verticalPos = i+1; verticalPos < inputs.length; verticalPos++) {
        if (inputs[verticalPos][j] >= treeSize) {
            return false
        }
    }

    return true
}
const isVisibleByLeft = (inputs, i, j) => {
    const treeSize = inputs[i][j]

    for (let horizontalPos = j-1; horizontalPos > -1; horizontalPos--) {
        if (inputs[i][horizontalPos] >= treeSize) {
            return false
        }
    }

    return true
}
const isVisibleByRight = (inputs, i, j) => {
    const treeSize = inputs[i][j]
    for (let horizontalPos = j+1; horizontalPos < inputs[i].length; horizontalPos++) {
        if (inputs[i][horizontalPos] >= treeSize) {
            return false
        }
    }

    return true
}

console.log('result : ',  run(inputs));

exports.run = run