var instance = require('./index');

var assert = require('assert');

describe('run', function() {
    describe('simple', function() {
        it('Win', function () {
            assert.equal(instance.run(['C X']), 6 + 1);
            assert.equal(instance.run(['A Y']), 6 + 2);
            assert.equal(instance.run(['B Z']), 6 + 3);
        });

        it('Lost', function () {
            assert.equal(instance.run(['B X']), 0 + 1);
            assert.equal(instance.run(['C Y']), 0 + 2);
            assert.equal(instance.run(['A Z']), 0 + 3);
        });

        it('draw', function () {
            assert.equal(instance.run(['A X']), 3 + 1);
            assert.equal(instance.run(['B Y']), 3 + 2);
            assert.equal(instance.run(['C Z']), 3 + 3);
        });
    });
    describe('Complexe', function() {
        it('Win' , function() {
            assert.equal(instance.run(['C X', 'A Y', 'B Z']) , (6+1) + (6+2) + (6+3));
        });

        it('Lost' , function() {
            assert.equal(instance.run(['B X', 'C Y', 'A Z']) , (0+1) + (0+2) + (0+3));
        });

        it('Mixed' , function() {
            assert.equal(instance.run(['A Z', 'A Y', 'B Y']) , (0+3) + (6+2) + (3+2));
        });
    });
});

describe('run2', function(){

});