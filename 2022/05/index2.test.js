var instance = require('./index2');

var assert = require('assert');

describe('run', function() {
    it('basic move with big move (<1)', function () {
        assert.deepEqual(instance.run([
            ['G', 'J', 'W', 'R', 'F', 'T', 'Z'],
            ['M', 'W', 'G' ],
            ['G', 'H', 'N', 'J' ],
        ], [[3, 1, 2]]), ['R', 'G','G']);
    });
    it('multi move with big move and simple move', function () {
        assert.deepEqual(instance.run(
            [['A', 'B', 'C', 'D'],['E'], ['F']],
            [
                [1, 1, 2],
                [1, 2, 3],
                [2, 1, 2],
            ]), ['D', 'B', 'A']);
    });
});