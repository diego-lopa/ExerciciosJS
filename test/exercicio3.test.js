var assert = require('assert');

var { primo } = require('../src/exercicio3.js');

describe('Exercicio 3 - Número primo', function() {
    it('2 é primo', function() {
        assert.ok(primo(2));
    })

    it('3 é primo', function() {
        assert.ok(primo(3));
    })

    it('4 non é primo', function() {
        assert.ok(!primo(4));
    })

    it('5 é primo', function() {
        assert.ok(primo(5));
    })

    it('6 non é primo', function() {
        assert.ok(!primo(6));
    })

    it('7 é primo', function() {
        assert.ok(primo(7));
    })

    it('16 non é primo', function() {
        assert.ok(!primo(16));
    })

    it('23 é primo', function() {
        assert.ok(primo(23));
    })

    it('25 non é primo', function() {
        assert.ok(!primo(25));
    })

    it('57 non é primo', function() {
        assert.ok(!primo(57));
    })

    it('59 é primo', function() {
        assert.ok(primo(59));
    })

    it('101 é primo', function() {
        assert.ok(primo(101));
    })

    it('555 non é primo', function() {
        assert.ok(!primo(555));
    })

    it('1001 non é primo', function() {
        assert.ok(!primo(1001));
    })

    it('1301 é primo', function() {
        assert.ok(primo(1301));
    })

})