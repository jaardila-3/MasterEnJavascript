/**
 * hacer una calculadora que
 * pida dos numeros y +,-,/,*
 */
var numeroUno = parseInt(prompt("ingresa un numero"));
var numeroDos = parseInt(prompt("ingresa otro numero"));

while (isNaN(numeroUno) || isNaN(numeroDos) || numeroUno < 0 || numeroDos < 0) {
    numeroUno = parseInt(prompt("ingresa un numero valido"));
    numeroDos = parseInt(prompt("ingresa otro numero que se valido"));

}

var operador = prompt("ingresa \n \"+\" para sumar \n '-' para restar \n '*' para multiplicar \n '/' para dividir");
switch (operador) {
    case "+":
        resultado = numeroUno + numeroDos;
        alert("el resultado es: " + resultado);
        break;

    case "-": resultado = numeroUno - numeroDos;
        alert("el resultado es: " + resultado);
        break;

    case "*":
        resultado = numeroUno * numeroDos;
        alert("el resultado es: " + resultado);
        break;

    case "/":
        resultado = numeroUno / numeroDos;
        alert("el resultado es: " + resultado);
        break;

    default: alert("operador incorrecto");
}