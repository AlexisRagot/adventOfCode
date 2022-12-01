var instance = require('./index');

var assert = require('assert');

describe('move', function(){
    it('null value' , function() {
        assert.equal(instance.move(null) , '0');
    });
    it('empty value' , function() {
        assert.equal(instance.move([]) , '0');
    });
    it('invalid action' , () => {
        assert.throws(() => instance.move(['test 9']), new Error('Invalid action test'))
    });
    it('invalid depth' , function() {
        assert.throws(() => instance.move(['forward 2', 'up 2']), new Error('Invalid depth'))
    });
    it('basic calcul' , function() {
        assert.equal(instance.move(['forward 1', 'down 1']) , '1');
    });
    it('mixed actions' , function() {
        assert.equal(instance.move(['forward 1', 'down 4', 'forward 3', 'up 2']) , '8');
    });
    it('multiplication actions' , function() {
        assert.equal(instance.move(['forward 5', 'down 5', 'forward 8', 'up 3', 'down 8', 'forward 2']) , '900');
    });
});

