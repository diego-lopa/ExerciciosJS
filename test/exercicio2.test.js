var assert = require('assert');

var { suma } = require('../src/exercicio2.js');

describe('Exercicio 2 - Suma de elementos', function() {

    it('[]: 0', function() {
        assert.equal(suma([]), 0);
    })

    it('[1, 2, 3]: 6', function() {
        assert.equal(suma([1, 2, 3]), 6);
    })

    it('[1, 2, 3, 4]: 10', function() {
        assert.equal(suma([1, 2, 3, 4]), 10);
    })

    it('[1, 2, 3, 4, 5]: 15', function() {
        assert.equal(suma([1, 2, 3, 4, 5]), 15);
    })

    it('[1, -1, 1, -1, 1]: 1', function() {
        assert.equal(suma([1, -1, 1, -1, 1]), 1);
    })

    it('[1, -1, 1, -1, 1, -1]: 0', function() {
        assert.equal(suma([1, -1, 1, -1, 1, -1]), 0);
    })

    it('[1, 0, Infinity]: Infinity', function() {
        assert.equal(suma([1, 0, Infinity]), Infinity);
    })
    
})

