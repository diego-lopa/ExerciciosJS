var assert = require('assert');

var { contarPalabras } = require('../src/exercicio8.js');

describe('Exercicio 8 - Reconto de palabras', function() {
    it('"" non ten palabras', function() {
        assert.deepEqual(contarPalabras(""), 0);
    })

    it('"a" ten 1 palabra', function() {
        assert.deepEqual(contarPalabras("a"), 1);
    })

    it('"a b" ten 2 palabras', function() {
        assert.deepEqual(contarPalabras("a b"), 2);
    })

    it('"a b c" ten 3 palabras', function() {
        assert.deepEqual(contarPalabras("a b c"), 3);
    })

    it('"a b c aa" ten 4 palabras', function() {
        assert.deepEqual(contarPalabras("a b c aa"), 4);
    })

    it('"a b c aa bb" ten 5 palabras', function() {
        assert.deepEqual(contarPalabras("a b c aa bb"), 5);
    })

    it('"a b c a a bb" ten 6 palabras', function() {
        assert.deepEqual(contarPalabras("a b c a a bb"), 6);
    })

    it("  a b c a a bb    ten 6 palabras", function() {
        assert.deepEqual(contarPalabras("  a b c a a bb   "), 6);
    })
})
