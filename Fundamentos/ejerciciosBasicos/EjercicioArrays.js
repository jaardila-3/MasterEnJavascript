/**
 * pida seis numeros por pantalla y los meta en un array
 * mostrar el array en documento y en consola
 * mostrar cuantos elementos tiene
 * busqueda de un valor introducido por el usuario
 * ordenarlo y mostrarlo
 * invertirlo y mostrarlo
 */

//funcion para mostrar el array
function mostrarArray(elementos, textoCustom = "") {
    document.write("<h1>Contenido del array" + textoCustom + "</h1>");
    document.write("<ul>");
    elementos.forEach((elemento, indice) => {
        document.write("<li>" + elemento + "</li>");
    });
    document.write("</ul>");
}

//pida seis numeros por pantalla y los meta en un array

//var numeros = new Array(6); //opcion 1
var numeros = []; //opcion 2

for (let i = 0; i < 6; i++) {
    //numeros[i] = parseInt(prompt("introduce un numero", 0)); //opcion 1
    numeros.push(parseInt(prompt("introduce un numero", 0))); //opcion 2
}

//mostrar en consola con *for in*
for (let numero in numeros) {
    console.log("array: " + numeros[numero]);
}

//mostrar en documento
mostrarArray(numeros);

//contar elementos
document.write("<h2>el array tiene: " + numeros.length + " elementos</h2>");

//busqueda
/*var busqueda = parseInt(prompt("BUSCA un numero", 0));
var posicion = numeros.findIndex(numero => numero == busqueda);
if (posicion != -1) {
    document.write("<hr/><h1>array encontrado</h1>")
    document.write("<h2>posicion de la busqueda: " + posicion + "</h2><hr/>");
} else {
    document.write("<hr/><h1>array NOOO encontrado</h1><hr/>")
}
*/

//ordenar y mostrar
numeros.sort();
mostrarArray(numeros, " ordenado alfabeticamente");

numeros.sort(function (a, b) {
    return a - b
});
mostrarArray(numeros, " ordenado numericamente");

//invertir y mostrar
numeros.reverse();
mostrarArray(numeros, " revertido");