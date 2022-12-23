const { inputs } = require("./input");

// part 1
const run = (inputs) => {
    let total = 0
    const cycleOfCalcul = [20, 60, 100, 140, 180, 220]
    let nbCycle = 0
    let x = 1

    inputs.forEach(input => {
        const inputSplitted = input.split(' ')

        switch (inputSplitted[0]) {
            case 'addx':
                for (let i = 0; i < 2; i++) {
                    nbCycle++
                    if (cycleOfCalcul.includes(nbCycle)) {
                        total += x * nbCycle
                    }
                }
                x += parseInt(inputSplitted[1], 10)
                break
            case 'noop':
                nbCycle++
                if (cycleOfCalcul.includes(nbCycle)) {
                    total += x * nbCycle
                }
                break
        }
    })

   return total
}

console.log('result : ',  run(inputs));

exports.run = run