const instance = require('./index2');

const assert = require('assert');

describe('run', function() {
    it('basic group', function () {
        assert.equal(instance.run(['abcdA', 'ghcdA', 'ijklA']), 27); // A
    });
    it('basic groups', function () {
        assert.equal(instance.run([
            'abcdA', 'ghcdA', 'ijklA',
            'abcdB', 'ghcdB', 'ijklB',
        ]), 27+28); // A + B
    });
});