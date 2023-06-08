/*5.Factorial: Escribe unha función que calcule o factorial dun número dado. O factorial dun número enteiro positivo n defínese como o produto de todos os enteiros positivos de 1 a n.*/
function factorial(n){
    var y=1;
    for(var k=n;k>0;k--){ /*bucle for que dado un número n vai muntiplicando cada número enteiro inferior (superior a 0)*/
        y=y*k; /*equivalente a y*=k */
    }
    return y;
}
module.exports = {
    factorial
}