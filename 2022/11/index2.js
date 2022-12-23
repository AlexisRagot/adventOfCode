const { inputs } = require("./input");
const Monkey = require("./Monkey");


const addition = (a, b) => a+b
const multiplication = (a, b) => a*b

// part 1
const run = (inputs) => {
    let monkeys = parseInputs(inputs)
    let dividersModulo = monkeys
        .map(monkey => monkey.testDivider)
        .reduce((acc, divisor) => acc * divisor, 1);

    const round = 10000
    for (let i = 0, groupSize = monkeys.length; i < groupSize * round; i++) {
        for (let j = 0, length = monkeys[i % groupSize].items.length; j < length; j++) {
            let item = monkeys[i % groupSize].play(false, dividersModulo)
            let index = monkeys[i % groupSize].getTargetToThrowAway(item)
            // console.log("Monkey " + i % groupSize + " throw item " + item + ' to monkey ' + index)
            monkeys[index].items.push(item)
        }
    }

    console.table(monkeys, ['nbInspect'])
    monkeys = monkeys.sort((a, b) => b.nbInspect - a.nbInspect)

    return monkeys[0].nbInspect * monkeys[1].nbInspect
}

function parseInputs(inputs) {
    const monkeys = []

    inputs.forEach(input => {
        let splitItem = input.split('\n')
        const config = {}
        config.items = splitItem[1].split(':')[1]
            .replaceAll(' ', '')
            .split(',')
            .map(item => parseInt(item, 10))
        config.operation = splitItem[2].indexOf("+") >= 0 ? addition : multiplication
        config.operationNumber = splitItem[2].split(' ').at(-1)
        config.testDivider = parseInt(splitItem[3].split(' ').at(-1), 10)
        config.monkeyIndexIfTrue = parseInt(splitItem[4].split(' ').at(-1), 10)
        config.monkeyIndexIfFalse = parseInt(splitItem[5].split(' ').at(-1), 10)
        monkeys.push(new Monkey(config))
    })

    return monkeys
}

console.log('result : ',  run(inputs));

exports.run = run