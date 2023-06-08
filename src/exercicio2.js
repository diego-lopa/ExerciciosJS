/*2.Suma de elementos: Escribe unha función que tome unha matriz de números como parámetro e devolva a suma de todos os elementos.*/
function suma(numeros) {
      var suma = 0;
      for (var i = 0; i < numeros.length; i++) { /*bucle for que percorre unha array e vai sumando todos os seus elementos*/
        suma += numeros[i];
      }
      return suma;
    }
module.exports = {
    suma
}