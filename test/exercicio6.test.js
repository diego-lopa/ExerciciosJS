var assert = require('assert');

var { primosEnRango } = require('../src/exercicio6.js');

describe('Exercicio 6 - Números primos en rango', function() {
    it('primos entre 1 e 10', function() {
        assert.deepEqual(primosEnRango(1, 10), [2, 3, 5, 7]);
    })

    it('primos entre 1 e 100', function() {
        assert.deepEqual(primosEnRango(1, 100), [2, 3, 5, 7, 11, 13, 17, 19, 23, 29,
                                                 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
                                                 73, 79, 83, 89, 97]);
    })

    it('primos entre 100 e 200', function() {
        assert.deepEqual(primosEnRango(100, 200), [101, 103, 107, 109, 113, 127, 131,
                                                   137, 139, 149, 151, 157, 163, 167,
                                                   173, 179, 181, 191, 193, 197, 199]);
    })
})