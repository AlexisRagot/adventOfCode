var instance = require('./index2');

var assert = require('assert');

describe('run', function() {
    it('no overlap', function () {
        assert.equal(instance.run(['1-2,3-8']), 0);
    });
    it('with overlap', function () {
        assert.equal(instance.run(['1-3,2-5']), 1);
        assert.equal(instance.run(['3-5,5-5']), 1);
        assert.equal(instance.run(['1-3,2-5', '3-5,5-5']), 2);
    });
});