var instance = require('./index');

var assert = require('assert');

describe('run', function() {
    it('no fully contained', function () {
        assert.equal(instance.run(['1-5,3-8']), 0);
    });
    it('is fully contained', function () {
        assert.equal(instance.run(['2-5,1-6']), 1);
        assert.equal(instance.run(['4-5,4-6']), 1);
    });
});