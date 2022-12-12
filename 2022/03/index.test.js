var instance = require('./index');

var assert = require('assert');

describe('run', function() {
    it('basic line', function () {
        assert.equal(instance.run(['abcb']), 2);
    });
    it('long basic line', function () {
        assert.equal(instance.run(['AzErTyuiOpQsDfGhJkLmWxrvBnaZ']), 18); // r
    });
    it('multi line', function () {
        assert.equal(instance.run(['abcb','AzErTyuiOpQsDfGhJkLmWxrvBnaZ']), 18+2); // r
    });
});