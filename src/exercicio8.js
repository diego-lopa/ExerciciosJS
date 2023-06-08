/*8.Reconto de palabras: escribe unha función que tome unha cadea como parámetro e devolva o número de palabras desa cadea.*/
function contarPalabras(cadena) {
  /*Eliminamos os espazos en branco do principio e do final da cadea*/
  cadena = cadena.trim();
  /*Se a cadea está valeira, devolve 0*/
  if (cadena.length === 0) {
    return 0;
  }
  /*Separamos a cadea en palabras*/
  const palabras = cadena.split(' ');
  /*Contamos o número de palabras (sen contar os espazos en branco)*/
  let contador = 0;
  for (let i = 0; i < palabras.length; i++) {
    if (palabras[i].trim().length > 0) { /*quita os espazos*/
      contador++;
    }
  }
  /*Devolve o número de palabras*/
  return contador;
}
  module.exports={
    contarPalabras
  }