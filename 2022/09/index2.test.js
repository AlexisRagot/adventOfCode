var instance = require('./index2');

var assert = require('assert');

describe('run', function() {
    it('aoc sample', function () {
        assert.equal(instance.run([
            'R 5',
            'U 8',
            'L 8',
            'D 3',
            'R 17',
            'D 10',
            'L 25',
            'U 20',
        ]), 36);
    });
});