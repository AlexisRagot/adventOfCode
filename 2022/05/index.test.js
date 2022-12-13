var instance = require('./index');

var assert = require('assert');

describe('run', function() {
    it('basic move', function () {
        assert.deepEqual(instance.run([['A', 'C'],['B']], [1, 1, 2]), ['A', 'B']);
    });
    it('multi move', function () {
        assert.deepEqual(instance.run(
            [['A', 'B', 'C', 'D'],['E'], ['F']],
            [
                [1, 1, 2],
                [1, 2, 3],
            ]), ['B', 'E', 'A']);
    });
});