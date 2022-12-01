var instance = require('./index');

var assert = require('assert');

describe('getIncrease', function(){
    it('null value' , function(){
        assert.equal( instance.getIncrease(null) , '0');
    });
    it('empty value' , function(){
        assert.equal( instance.getIncrease([]) , '0');
    });
    it('only increase' , function(){
        assert.equal( instance.getIncrease([1, 2, 3]) , '2');
    });
    it('only decrease' , function(){
        assert.equal( instance.getIncrease([3, 2, 1]) , '0');
    });
    it('mixed values' , function(){
        assert.equal( instance.getIncrease([3, 10, 7, 9, 15, 1]) , '3');
    });
});

