var instance = require('./index2');

var assert = require('assert');

describe('run', function() {
    describe('simple', function() {
        it('Win', function () {
            assert.equal(instance.run(['C Z']), 6 + 1);
            assert.equal(instance.run(['A Z']), 6 + 2);
            assert.equal(instance.run(['B Z']), 6 + 3);
        });

        it('Lost', function () {
            assert.equal(instance.run(['B X']), 0 + 1);
            assert.equal(instance.run(['C X']), 0 + 2);
            assert.equal(instance.run(['A X']), 0 + 3);
        });

        it('draw', function () {
            assert.equal(instance.run(['A Y']), 3 + 1);
            assert.equal(instance.run(['B Y']), 3 + 2);
            assert.equal(instance.run(['C Y']), 3 + 3);
        });
    });
    describe('Complexe', function() {
        it('Win' , function() {
            assert.equal(instance.run(['C Z', 'A Z', 'B Z']) , (6+1) + (6+2) + (6+3));
        });

        it('Lost' , function() {
            assert.equal(instance.run(['B X', 'C X', 'A X']) , (0+1) + (0+2) + (0+3));
        });

        it('Mixed' , function() {
            assert.equal(instance.run(['A Z', 'C X', 'B Y']) , (6+2) + (0+2) + (3+2));
        });
    });
});