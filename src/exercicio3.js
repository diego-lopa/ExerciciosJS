/*3.Número primo: Escribe unha función que determine se un número dado é primo ou non.*/
function primo(n) {
  /*Se o número é menor ou igual a 1, non é primo*/
      if (n <= 1) {
        return false;
      }
    /*Se o número é 2, é primo*/
       if (n === 2) {
        return true;
      }
    /*Se o número é par, non é primo*/
       if (n % 2 === 0) {
        return false;
      }
    /*Comprovar se é divisible por algun número impar menor que el*/
      for (var i = 3; i <= Math.sqrt(n); i += 2) {
       if (n % i === 0) {
        return false;
      }
    }
    /*Se non hai ningún divisor, é primo*/
    return true;
  }
module.exports = {
    primo
}