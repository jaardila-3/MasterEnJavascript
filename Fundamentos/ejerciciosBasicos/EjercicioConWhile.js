/**
 * si un numero es par o impar
 */
var numero = parseInt(prompt("ingrese un numero"));
while (isNaN(numero)) {
    numero = parseInt(prompt("ingresa un numero valido"));
}  if (numero % 2 == 0) {
    document.write("es un numero par");
} else {
    document.write("es un numero impar");
}