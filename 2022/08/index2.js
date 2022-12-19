const { inputs } = require("./input");

// part 2
const run = (inputs) => {
    const candidates = []

    for (let i = 0; i < inputs.length; i++) {
        for (let j = 0; j < inputs[i].length; j++) {
            if (i === 0 || j === 0 || i === (inputs.length -1) || j === (inputs[i].length -1)) {
                continue
            }

            const sizeFromTop = getTopDistanceOfLargeTree(inputs, i, j)
            const sizeFromRight = getRightDistanceOfLargeTree(inputs, i, j)
            const sizeFromRBottom = getBottomDistanceOfLargeTree(inputs, i, j)
            const sizeFromLeft = getLeftDistanceOfLargeTree(inputs, i, j)

            candidates.push(sizeFromTop * sizeFromRight * sizeFromRBottom * sizeFromLeft)
        }
    }

    return candidates.sort((a, b) => a-b).pop()
}

const getTopDistanceOfLargeTree = (inputs, i, j) => {
    const treeSize = inputs[i][j]
    let distance = 1

    for (let verticalPos = i-1; verticalPos > 0; verticalPos--, distance++) {
        if (inputs[verticalPos][j] >= treeSize) {
            return distance
        }
    }

    return distance
}
const getBottomDistanceOfLargeTree = (inputs, i, j) => {
    const treeSize = inputs[i][j]
    let distance = 1

    for (let verticalPos = i+1; verticalPos < inputs.length-1; verticalPos++, distance++) {
        if (inputs[verticalPos][j] >= treeSize) {
            return distance
        }
    }

    return distance
}
const getLeftDistanceOfLargeTree = (inputs, i, j) => {
    const treeSize = inputs[i][j]
    let distance = 1

    for (let horizontalPos = j-1; horizontalPos > 0; horizontalPos--, distance++) {
        if (inputs[i][horizontalPos] >= treeSize) {
            return distance
        }
    }

    return distance
}
const getRightDistanceOfLargeTree = (inputs, i, j) => {
    const treeSize = inputs[i][j]
    let distance = 1

    for (let horizontalPos = j+1; horizontalPos < inputs[i].length-1; horizontalPos++, distance++) {
        if (inputs[i][horizontalPos] >= treeSize) {
            return distance
        }
    }

    return distance
}

console.log('result : ',  run(inputs));

exports.run = run