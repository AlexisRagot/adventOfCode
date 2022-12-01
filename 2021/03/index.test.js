var instance = require('./index');

var assert = require('assert');

describe('getGamma', function(){
    it('basic test' , function() {
        assert.deepStrictEqual(instance.getGamma(['11111', '11111']), [1,1,1,1,1])
        assert.deepStrictEqual(instance.getGamma(['00000', '00000']), [0,0,0,0,0])
    });
    it('complex test' , function() {
        assert.deepStrictEqual(instance.getGamma(['10011', '10011', '01100']), [1,0,0,1,1])
    });
});


describe('getEpsilon', function() {
    it('basic test' , function() {
        assert.deepStrictEqual(instance.getEpsilon(['11111', '11111']), [0,0,0,0,0])
        assert.deepStrictEqual(instance.getEpsilon(['00000', '00000']), [1,1,1,1,1])
    });
    it('complex test' , function() {
        assert.deepStrictEqual(instance.getEpsilon(['10011', '10011', '01100']), [0,1,1,0,0])
    });
});

describe('parseBinary', function() {
    it('basic test' , function() {
        assert.deepStrictEqual(instance.parseBinary( [0,0,0,0,0]), 0)
        assert.deepStrictEqual(instance.parseBinary([1,1,1,1,1]), 31)
    });
    it('complex test' , function() {
        assert.deepStrictEqual(instance.parseBinary([1,0,0,1,1,1,0,1,1,0,1]), 1261)
    });
});