/*9.Palabras máis longas: escribe unha función que tome unha cadea de texto como parámetro e devolva unha matriz coas palabras máis longas desa cadea.*/
function palabrasMaisLongas(cadena) {
  /*Eliminamos os espazos en branco do principio e do final da cadea*/
  cadena = cadena.trim();
  /* Se a cadea está valeira, devolve un array valeiro*/
  if (cadena.length === 0) {
    return [];
  }
  /* Separamos a cadea en palabras*/
  const palabras = cadena.split(' ');
  /*Creamos unha variable para almacenar a lonxitude máxima encontrada*/
  let longitudMaxima = 0;
  /* Creamos un array para almacenar as palabras máis longas*/
  const palabrasMaisLongas = [];
  /* Recorremos todalas palabras*/
  for (let i = 0; i < palabras.length; i++) {
    /* Eliminamos os espazos en branco da palabra*/
    const palabraSinEspacios = palabras[i].trim();
    /*Se a lonxitude da palabra sen espazos é maior que a lonxitude máxima encontrada ata agora*/
    if (palabraSinEspacios.length > longitudMaxima) {
      /* Actualizamos a lonxitude máxima*/
      longitudMaxima = palabraSinEspacios.length;
      /* Valeiramos o array de palabras máis longas*/
      palabrasMaisLongas.length = 0;
      /*Engadimos a palabra actual ao array de palabras máis logas*/
      palabrasMaisLongas.push(palabraSinEspacios);
    } else if (palabraSinEspacios.length === longitudMaxima) {
      /*Se a lonxitude da palabra sen espazos é igual á lonxitude máxima atopada ata agora*/
      /*Engadimos a palabra actual ao array de palabras máis longas*/
      palabrasMaisLongas.push(palabraSinEspacios);
    }
  }
  /*Devolvemos o array de palabras máis longas*/
  return palabrasMaisLongas;
}

  module.exports={
    palabrasMaisLongas
  }