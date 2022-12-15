var instance = require('./index2');

var assert = require('assert');

describe('run', function() {
    it('flag in middle', function () {
        assert.equal(instance.run("mjqjpqmgbljsphdztnvjfqwrcgsmlb", 14), 19);
        assert.equal(instance.run("bvwbjplbgvbhsrlpgdmjqwftvncz", 14), 23);
        assert.equal(instance.run("nppdvjthqldpwncqszvftbrmjlhg", 14), 23);
        assert.equal(instance.run("nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg", 14), 29);
        assert.equal(instance.run("zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw", 14), 26);
    });
});