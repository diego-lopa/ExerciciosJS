var assert = require('assert');

var { palindromo } = require('../src/exercicio4.js');

describe('Exercicio 4 - Palíndromo', function() {
    it('ana é palíndromo', function() {
        assert.ok(palindromo('ana'));
    })

    it('oso é palíndromo', function() {
        assert.ok(palindromo('oso'));
    })

    it('reconocer é palíndromo', function() {
        assert.ok(palindromo('reconocer'));
    })

    it('asno non é palíndromo', function() {
        assert.ok(!palindromo('asno'));
    })

    it('la tele letal é palíndromo', function() {
        assert.ok(palindromo('la tele letal'));
    })

    it('A torre da derrota é palíndromo', function() {
        assert.ok(palindromo('A torre da derrota'));
    })
    

    it('Anotaram a data da maratona é palíndromo', function() {
        assert.ok(palindromo('Anotaram a data da maratona'));
    })
})