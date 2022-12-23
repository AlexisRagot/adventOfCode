var instance = require('./index');

var assert = require('assert');

describe('run', function() {
    it('aoc sample', function () {
        assert.equal(instance.run([
            'R 4',
            'U 4',
            'L 3',
            'D 1',
            'R 4',
            'D 1',
            'L 5',
            'R 2',
        ]), 13);
    });
});