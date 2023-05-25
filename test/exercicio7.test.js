var assert = require('assert');

var { ordenar } = require('../src/exercicio7.js');

describe('Exercicio 7 - Ordenar matriz', function() {

    it('[] ordenada é []', function() {
        assert.deepEqual(ordenar([]), []);
    })

    it('[1] ordenada é [1]', function() {
        assert.deepEqual(ordenar([1]), [1]);
    })

    it('[1, 2] ordenada é [1, 2]', function() {
        assert.deepEqual(ordenar([1, 2]), [1, 2]);
    })

    it('[1, 2, 3, 4, 5] ordenada é [1, 2, 3, 4, 5]', function() {
        assert.deepEqual(ordenar([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
    })

    it('[5, 4, 3, 2, 1] ordenada é [1, 2, 3, 4, 5]', function() {
        assert.deepEqual(ordenar([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5]);
    })

    it('[1, 3, 2, 5, 4] ordenada é [1, 2, 3, 4, 5]', function() {
        assert.deepEqual(ordenar([1, 3, 2, 5, 4]), [1, 2, 3, 4, 5]);
    })

    it('[2,4,6,4,2] ordenada é [2,2,4,4,6]', function() {
        assert.deepEqual(ordenar([2,4,6,4,2]), [2,2,4,4,6]);
    })
})
    