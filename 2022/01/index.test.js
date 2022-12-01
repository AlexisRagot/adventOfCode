var instance = require('./index');

var assert = require('assert');

describe('run', function(){
    it('null value' , function() {
        assert.equal(instance.run(null) , null);
    });
    it('empty value' , function() {
        assert.equal(instance.run([]) , null);
    });
    it('one elf' , function() {
        assert.equal(instance.run(['10']) , 10);
    });
    it('3 elf' , function() {
        assert.equal(instance.run(['10', '20', '', '40', '', '20']) , 40);
    });
});

describe('run2', function(){
    it('null value' , function() {
        assert.equal(instance.run2(null) , null);
    });
    it('empty value' , function() {
        assert.equal(instance.run2([]) , null);
    });
    it('one elf' , function() {
        assert.equal(instance.run2(['10']) , 10);
    });
    it('top of 3 with 5 elf' , function() {
        assert.equal(instance.run2(['10', '20', '', '40', '', '20', '', '100', '10', '', '50', '50']) , 40 + 110 + 100);
    });
});