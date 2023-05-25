var assert = require('assert');

var { palabrasMaisLongas } = require('../src/exercicio9.js');

describe('Exercicio 9 - Palabras máis longas', function() {
    it('"" non ten palabras máis longas', function() {
        assert.deepEqual(palabrasMaisLongas(""), []);
    })

    it('"a" é a palabra máis longa', function() {
        assert.deepEqual(palabrasMaisLongas("a"), ["a"]);
    })

    it('"a b" é a palabra máis longa', function() {
        assert.deepEqual(palabrasMaisLongas("a b"), ["a", "b"]);
    })

    it('"a bb": ["bb"] é a palabra máis longa', function() {
        assert.deepEqual(palabrasMaisLongas("a bb"), ["bb"]);
    })

    it('"aa b ": ["aa"] é a palabra máis longa', function() {
        assert.deepEqual(palabrasMaisLongas("aa b "), ["aa"]);
    })

    it('"aa bb": ["aa", "bb"] é a palabra máis longa', function() {
        assert.deepEqual(palabrasMaisLongas("aa bb"), ["aa", "bb"]);
    })

    it('["aa  bb  c": ["aa", "bb"] é a palabra máis longa', function() {
        assert.deepEqual(palabrasMaisLongas("aa  bb  c"), ["aa", "bb"]);
    })
})