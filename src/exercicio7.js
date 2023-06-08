/*7.Ordenar matriz: escribe unha función que tome unha matriz de números como parámetro e devolva unha nova matriz cos mesmos elementos, pero ordenada ascendente.*/
function ordenar(array) {
    return array.sort(function(a, b) {
      return a - b;
    });
  }
module.exports = {
    ordenar
  }