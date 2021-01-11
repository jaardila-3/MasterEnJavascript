/**
 * muestre todos los numeros divisores de un numero
 */
var numero = parseInt(prompt("ingrese un numero"));

for (let index = 1; index <= numero; index++) {
    if (numero%index==0) {
        document.write(index+"<br>");
    }
    
}