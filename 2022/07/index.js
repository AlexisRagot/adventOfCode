const { inputs } = require("./input");

class Node {
    constructor(name) {
        this.name = name
    }
    parent = null
    children = []
    files = []
}

let candidates

// part 1
const run = (inputs ) => {
    const firstNode = new Node('/')
    let currentNode = firstNode
    inputs.shift() // remove first command

    inputs.forEach(cl => {
        if (cl.startsWith('$ cd')) {
            const dirname = cl.split(' ').pop();
            if (dirname === '..') {
                currentNode = currentNode.parent
            } else if (currentNode.children.find(child => child.name === dirname)) {
                currentNode = currentNode.children.find(child => child.name === dirname)
            } else {
                const children = new Node(dirname)
                currentNode.children.push(children)
                children.parent = currentNode
                currentNode = children
            }
        } else if (cl.startsWith('$ ls')) {
        } else if (cl.startsWith('dir ')) {
        } else {
            currentNode.files.push(cl.split(' ')[0])
        }
    })
    candidates = []
    getDirSize(firstNode)

    return candidates.reduce((acc, item) => acc +item, 0)
}

function getDirSize(node) {
    let size = node.files.reduce(
        (acc, item) => acc + parseInt(item, 10),
        0)
    node.children.forEach(child => {
        size += parseInt(getDirSize(child), 10)
    })
    if (size < 100000) {
        candidates.push(size)
    }

    return size
}

console.log('result : ',  run(inputs));

exports.run = run