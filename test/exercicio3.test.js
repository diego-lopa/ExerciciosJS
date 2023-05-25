var assert = require('assert');

var { suma } = require('../src/exercicio3.js');

describe('Exercicio 3 - Número primo', function() {
    it('2 é primo', function() {
        assert.true(primo(2));
    })

    it('3 é primo', function() {
        assert.true(primo(3));
    })

    it('4 non é primo', function() {
        assert.false(primo(4));
    })

    it('5 é primo', function() {
        assert.true(primo(5));
    })

    it('6 non é primo', function() {
        assert.false(primo(6));
    })

    it('7 é primo', function() {
        assert.true(primo(7));
    })

    it('16 non é primo', function() {
        assert.false(primo(16));
    })

    it('23 é primo', function() {
        assert.true(primo(23));
    })

    it('25 non é primo', function() {
        assert.false(primo(25));
    })

    it('57 non é primo', function() {
        assert.false(primo(57));
    })

    it('59 é primo', function() {
        assert.true(primo(59));
    })

    it('101 é primo', function() {
        assert.true(primo(101));
    })

    it('555 non é primo', function() {
        assert.false(primo(555));
    })

    it('1001 non é primo', function() {
        assert.false(primo(1001));
    })

    it('1301 é primo', function() {
        assert.true(primo(1301));
    })

})