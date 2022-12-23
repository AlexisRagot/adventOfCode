const { inputs } = require("./input")

const ROPE_SIZE = 10

class Node {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.next = null
    }
}

// part 2
const run = (inputs) => {
    const node = new Node(0, 0)
    let head = node
    let prevNode = node
    const tailPositions = new Set()

    for (let i = 0; i < ROPE_SIZE -1; i++) {
        const node = new Node(0, 0)
        prevNode.next = node
        prevNode = node
    }

    inputs.forEach((input) => {
        input = input.split(' ')
        let direction = input[0]
        let distance = input[1]

        for (let i = 0; i < distance; i++) {
            head = moveHead(head, direction)
            let tail = moveNext(head, head.next)
            const picked = (({ x, y }) => ({ x, y }))(tail);
            tailPositions.add(JSON.stringify(picked))
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

function moveNext(node, nextNode) {
    let diffX = node.x - nextNode.x
    let diffY = node.y - nextNode.y
    const sameColOrRow = diffX === 0 || diffY === 0
    if (sameColOrRow) { // cross move
        if (diffX === 2) {
            nextNode.x++
        } else if (diffX === -2) {
            nextNode.x--
        } else if (diffY === 2) {
            nextNode.y++
        } else if (diffY === -2) {
            nextNode.y--
        }
    } else { // diag move
        if ((diffX === 2 & diffY === 1) || (diffX === 1 & diffY === 2) || (diffX === 2 & diffY === 2)) { // up right
            nextNode.y++
            nextNode.x++
        } else if ((diffX === 2 && diffY === -1) || (diffX === 1 && diffY === -2) || (diffX === 2 & diffY === -2)) { // bottom right
            nextNode.y--
            nextNode.x++
        } else if ((diffX === -1 && diffY === 2) || (diffX === -2 && diffY === 1) || (diffX === -2 & diffY === 2)) { // up left
            nextNode.y++
            nextNode.x--
        } else if ((diffX === -1 && diffY === -2) || (diffX === -2 && diffY === -1) || (diffX === -2 & diffY === -2)) { // bottom left
            nextNode.y--
            nextNode.x--
        }
    }
    if (nextNode.next) {
        nextNode = moveNext(nextNode, nextNode.next)
    }

    return nextNode
}

console.log('result : ',  run(inputs));

exports.run = run