# Exercicios básicos de programación en Javascript

 1. Número maior: escribe unha función que tome dous números como parámetros e devolva o número maior dos dous.
 2. Suma de elementos: Escribe unha función que tome unha matriz de números como parámetro e devolva a suma de todos os elementos.
 3. Número primo: Escribe unha función que determine se un número dado é primo ou non.
 4. Palíndromo: Escribe unha función que determine se unha palabra ou frase determinada é un palíndromo (léase o mesmo de esquerda a dereita que de dereita a esquerda), ignorando os espazos e os caracteres non alfabéticos.
 5. Factorial: Escribe unha función que calcule o factorial dun número dado. O factorial dun número enteiro positivo n defínese como o produto de todos os enteiros positivos de 1 a n.
 6. Números primos dun rango: escribe unha función que tome dous números como parámetros e devolva todos os números primos dese rango.
 7. Ordenar matriz: escribe unha función que tome unha matriz de números como parámetro e devolva unha nova matriz cos mesmos elementos, pero ordenada ascendente.
 8. Reconto de palabras: escribe unha función que tome unha cadea como parámetro e devolva o número de palabras desa cadea.
 9. Palabras máis longas: escribe unha función que tome unha cadea de texto como parámetro e devolva unha matriz coas palabras máis longas desa cadea.
 10. Cadea inversa: escribe unha función que tome unha cadea como parámetro e devolva unha nova cadea cos caracteres en orde inversa.

 ## Preparativos

 Para pasar os tests ás funcións é necesario instalar o paquete `mocha`. Dende un terminal escriba a orde seguinte:

 ```sh
 npm install
 ```

 ## Organización dos cartafoles

 Neste proxecto hai dous cartafoles: `src` e `test`. No primeiro gardará os diferentes ficheiros co código fonte das súas funcións; no segundo atópanse os tests.

 Cree novos ficheiros cos nomes `exercicio1.js`, `exercicio2.js`, `exercicio3.js`, ... dentro do cartafol `src` e engada novos tests no cartafol `test` (cos nomes correspondentes: `exercicio1.test.js`, `exercicio2.test.js`, `exercicio3.test.js`, ...).

## Execución dos tests

Para lanzar todos os test, escriba a seguinte orde no terminal:

```sh
npx mocha
```

Se dispón dunha versión recente de Visual Studio Code pode resultarlle útil a extensión [Mocha Test Explorer](https://marketplace.visualstudio.com/items?itemName=hbenl.vscode-mocha-test-adapter).
