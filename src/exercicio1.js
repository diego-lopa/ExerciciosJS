/*1.Número maior: escribe unha función que tome dous números como parámetros e devolva o número maior dos dous.*/
function maior(a, b) {
    if(a>b){
        return(a);
    }else{
        return(b);
    }
}
/*permite exportar o arquivo para que o test tenha aceso a el
    maior:Maior (os : serve para crear equivalencias*/
module.exports = {
    maior
}