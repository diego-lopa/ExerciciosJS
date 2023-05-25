var assert = require('assert');

var { maior } = require('../src/exercicio1.js');

describe('Exercicio 1 - Número maior', function() {
    it('5 e 8: 8 é maior', function() {
        assert.equal(maior(5, 8), 8);
    });

    it('5 e 2: 5 é maior', function() {
        assert.equal(maior(5, 2), 5);
    });

    it('5 e 5: 5 é maior', function() {
        assert.equal(maior(5, 5), 5);
    });

    it('-6 e 5: 5 é maior', function() {
        assert.equal(maior(-6, 5), 5);
    });    
})