var assert = require('assert');

var { factorial } = require('../src/exercicio5.js');

describe('Exercicio 5 - Factorial', function() {
    it('0! é 1', function() {
        assert.equal(factorial(0), 1);
    })

    it('1! é 1', function() {
        assert.equal(factorial(1), 1);
    })

    it('2! é 2', function() {
        assert.equal(factorial(2), 2);
    })

    it('3! é 6', function() {
        assert.equal(factorial(3), 6);
    })

    it('5! é 120', function() {
        assert.equal(factorial(5), 120);
    })

    it('10! é 3628800', function() {
        assert.equal(factorial(10), 3628800);
    })

    it('14! é 87178291200', function() {
        assert.equal(factorial(14), 87178291200);
    })
})