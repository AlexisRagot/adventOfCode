const { inputs } = require("./input");

// part 2
const run = (inputs) => {
    let crt = ""
    const cycleBreak = [40, 80, 120, 160, 200, 240]
    let nbCycle = 0
    let x = 2

    inputs.forEach(input => {
        const inputSplitted = input.split(' ')

        switch (inputSplitted[0]) {
            case 'addx':
                for (let i = 0; i < 2; i++) {
                    nbCycle++
                    crt += sprite(x)[nbCycle % 40]
                    if (cycleBreak.includes(nbCycle)) {
                        crt += '\n'
                    }
                }
                x += parseInt(inputSplitted[1], 10)
                break
            case 'noop':
                nbCycle++
                crt += sprite(x)[nbCycle % 40]
                if (cycleBreak.includes(nbCycle)) {
                    crt += '\n'
                }
                break
        }
    })

    return crt
}

function sprite(index) {
    let sprite = Array.from(".".repeat(40))

    if (sprite[index -1]) sprite[index -1] = '#'
    if (sprite[index]) sprite[index] = '#'
    if (sprite[index+1]) sprite[index+1] = '#'

    return sprite.join('')
}

console.log( run(inputs));

exports.run = run
exports.sprite = sprite