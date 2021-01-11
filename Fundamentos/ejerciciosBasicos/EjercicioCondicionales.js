'use strict'

/**
 * programa que pida dos numeros
 * cual es el mayor
 * menor 
 * iguales
 */

var num_uno = parseInt(prompt('escribe un numero', 0));
var num_dos = parseInt(prompt('escribe otro numero', 0));

while (num_uno <= 0 || num_dos <= 0 || isNaN(num_uno) || isNaN(num_dos)){
num_uno = parseInt(prompt('escribe un numero', 0));
num_dos = parseInt(prompt('escribe otro numero', 0));
}

if (num_uno > num_dos) {
    document.write('es mayor el ' + num_uno + ' es menor el ' + num_dos);
} else if (num_uno < num_dos) {
    document.write('es mayor el ' + num_dos + ' es menor el ' + num_uno);
} else {
    document.write('son iguales');
}
 