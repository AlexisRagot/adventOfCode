const { inputs } = require("./input");

// part 1
const run = (inputs) => {
    let head = {x:0, y:0}
    let tail = {x:0, y:0}
    const tailPositions = new Set()

    inputs.forEach((input) => {
        input = input.split(' ')
        let direction = input[0]
        let distance = input[1]

        for (let i = 0; i < distance; i++) {
            head = moveHead(head, direction)
            tail = moveTail(head, tail)
            tailPositions.add(JSON.stringify(tail))
        }
    })

    return tailPositions.size
}

function moveHead(head, direction) {
    switch (direction) {
        case 'U':
            head.y++
            break;
        case 'D':
            head.y--
            break;
        case 'L':
            head.x--
            break;
        case 'R':
            head.x++
            break;
    }

    return head
}

function moveTail(head, tail) {
    let diffX = head.x - tail.x
    let diffY = head.y - tail.y
    const sameColOrRow = diffX === 0 || diffY === 0
    if (sameColOrRow) { // cross move
        if (diffX === 2) {
            tail.x++
        } else if (diffX === -2) {
            tail.x--
        } else if (diffY === 2) {
            tail.y++
        } else if (diffY === -2) {
            tail.y--
        }
    } else { // diag move
        if ((diffX === 2 & diffY === 1) || (diffX === 1 & diffY === 2)) { // up right
            tail.y++
            tail.x++
        } else if ((diffX === 2 && diffY === -1) || (diffX === 1 && diffY === -2)) { // bottom right
            tail.y--
            tail.x++
        } else if ((diffX === -1 && diffY === 2) || (diffX === -2 && diffY === 1)) { // up left
            tail.y++
            tail.x--
        } else if ((diffX === -1 && diffY === -2) || (diffX === -2 && diffY === -1)) { // bottom left
            tail.y--
            tail.x--
        }
    }

    return tail
}

console.log('result : ',  run(inputs));

exports.run = run