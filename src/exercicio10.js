/*10.Cadea inversa: escribe unha función que tome unha cadea como parámetro e devolva unha nova cadea cos caracteres en orde inversa.*/
function cadeaInversa(cadena) {
    var cadeaInversa = '';
    for (var i = cadena.length - 1; i >= 0; i--) { /*bucle for que recorre unha array e dalle o valor inverso a cada elemento xerando a cadea inversa */
      cadeaInversa += cadena[i];
    }
    return cadeaInversa;
  }
  module.exports={
    cadeaInversa
  }