var instance = require('./index');

var assert = require('assert');

describe('run', function() {
    it('small array', function () {
        assert.equal(instance.run([
            [3, 0, 3, 7, 3],
            [2, 5, 5, 1, 2],
            [6, 5, 3, 3, 2],
            [3, 3, 5, 4, 9],
            [3, 5, 3, 9, 0],
        ]), 21);
    });
});