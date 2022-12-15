var instance = require('./index');

var assert = require('assert');

describe('run', function() {
    it('start with flag', function () {
        assert.equal(instance.run('abcd'), 4);
    });
    it('end with flag', function () {
        assert.equal(instance.run("aaabcd"), 6);
        assert.equal(instance.run("aaaaaaaaaaabcd"), 14);
    });
    it('flag in middle', function () {
        assert.equal(instance.run("bvwbjplbgvbhsrlpgdmjqwftvncz"), 5);
        assert.equal(instance.run("nppdvjthqldpwncqszvftbrmjlhg"), 6);
        assert.equal(instance.run("nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg"), 10);
        assert.equal(instance.run("zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw"), 11);
    });
});