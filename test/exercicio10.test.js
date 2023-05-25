var assert = require('assert');

var { cadeaInversa } = require('../src/exercicio10.js');

describe('Exercicio 10 - Cadena inversa', function() {
    it('"" invertida é ""', function() {
        assert.equal(cadeaInversa(""), "");
    })

    it('"a" invertida é "a"', function() {
        assert.equal(cadeaInversa("a"), "a");
    })

    it('"ab" invertida é "ba"', function() {
        assert.equal(cadeaInversa("ab"), "ba");
    })

    it('"abc" invertida é "cba"', function() {
        assert.equal(cadeaInversa("abc"), "cba");
    })

    it('"abcd" invertida é "dcba"', function() {
        assert.equal(cadeaInversa("abcd"), "dcba");
    })

    it('"Lorem ipsum" invertida é "muspi meroL"', function() {
        assert.equal(cadeaInversa("Lorem ipsum"), "muspi meroL");
    })
})