class Monkey {
    constructor(config) {
        this.nbInspect = 0
        this.items = config.items
        this.operation = config.operation
        this.operationNumber = config.operationNumber
        this.testDivider = config.testDivider
        this.monkeyIndexIfTrue = config.monkeyIndexIfTrue
        this.monkeyIndexIfFalse = config.monkeyIndexIfFalse
    }

    play(withRelief, dividersModulo = null) {
        this.nbInspect++
        let item = this.items.shift()
        item = this.computeOperation(item)
        return withRelief ? Math.floor(item/3) : item % dividersModulo
    }

    computeOperation(a) {
        const b = this.operationNumber === 'old' ? a : parseInt(this.operationNumber, 10)
        return this.operation(a, b)
    }

    getTargetToThrowAway(item) {
        return item % this.testDivider === 0 ? this.monkeyIndexIfTrue : this.monkeyIndexIfFalse
    }
}

module.exports = Monkey;
