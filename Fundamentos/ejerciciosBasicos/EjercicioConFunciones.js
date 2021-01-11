//Parametros Rest: argumentos individuales pasan a array
console.log("\n\nParametros Rest\n\n");

function listaNombres(nombre1, nombre2, ...restNombres) {
    console.log(nombre1);
    console.log(nombre2);
    console.log(restNombres);
}

listaNombres('juan', 'pedro', 'jorge', 'nata', 'jero');
console.log("**********************");

function sumar(...elementos) {
    var total = 0;
    for (let index = 0; index < elementos.length; index++) {
        total += elementos[index];
    }
    return total;
}
console.log("la suma de 2+4+4 es: ", sumar(2, 4, 4));


//Parametros Spread: el array pasa a argumentos individuales
console.log("\n\nParametros spread\n\n");
var numeros = [10, 4];
function resta(a, b) {
    return a - b;
}
console.log("la resta es: " + resta(...numeros));

console.log("**********************");

var lista1 = [1, 2];
var lista2 = [...lista1, 3, 4];
console.log("la lista es: ", lista2)


//callback con funciones anonimas
console.log("\n\ncallback y funciones anonimas\n\n");
function sumatoria(numeroUno, numeroDos, muestraPorDos, muestraPorTres) {
    var suma = numeroUno + numeroDos;

    muestraPorDos(suma);
    muestraPorTres(suma);

    return suma;
}

sumatoria(2, 4, function (params) {
    console.log("se muestra por dos: ", (params * 2));
}, function (params) {
    console.log("se muestra por tres: ", (params * 3));
});


//funciones de flecha: se utiliza en las callback
console.log("\n\nfunciones de flecha\n\n");
sumatoria(2, 4, params => {
    console.log("se muestra por dos: ", (params * 2));
}, (params) => { // mas de un parametro lleva parentesis
    console.log("se muestra por tres: ", (params * 3));
});

//parseo a string
console.log("\n\nparseo a string\n\n");
var numeroEntero = 12;
console.log(numeroEntero);
console.log(typeof numeroEntero);
console.log("\n");
console.log(numeroEntero.toString());
console.log(typeof numeroEntero.toString());
console.log("\n");

//minusculas, mayusculas y cantidad de caracteres
var texto1= "Jorge Ardila";
var texto2= "Natalia Higuita";
var texto3= "jeronimo ardila";

console.log(texto1.toLowerCase());
console.log(texto2.toUpperCase());
console.log(texto3.length);
console.log("\n");

//plantillas
var tuNombre= prompt("cual es su nombre");
var tuApellido= prompt("cual es su apellido");

var textoCompleto=`
<h1>Hola que tal</h1>
<h3>su nombre es: ${tuNombre}</h3>
<h3>su apellido es: ${tuApellido}</h3>
`;
document.write(textoCompleto);
