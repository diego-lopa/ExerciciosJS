/*4.Palíndromo: Escribe unha función que determine se unha palabra ou frase determinada é un palíndromo (léase o mesmo de esquerda a dereita que de dereita a esquerda), ignorando os espazos e os caracteres non alfabéticos.*/
function palindromo(frase) {
    // Converter a frase a minúsculas e quitar espazos e caracteres non alfabéticos
    const fraseLimpa = frase.toLowerCase().replace(/[^a-z]/g, '');
  
    // Comprobar se a frase limpa é igual a súa inversa
    for (let i = 0; i < fraseLimpa.length / 2; i++) {
      if (fraseLimpa[i] !== fraseLimpa[fraseLimpa.length - 1 - i]) {
        return false;
      }
    }
    return true;
  }
  module.exports = {
    palindromo
  }