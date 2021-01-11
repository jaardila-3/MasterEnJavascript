/**
 * con un bucle mostrar 
 * media y suma de los numero
 * hasta ingresar negativo
 */


var contador = 0;
var suma = 0;

do {
    var num_uno = parseInt(prompt('ingrese un numero'));
    if (isNaN(num_uno)) {
        num_uno = 0;
    } else if (num_uno >= 0){
    contador++;
    suma = suma + num_uno;
    }
        
} while (num_uno >= 0);
alert('la suma es: ' + suma+ ' y la media es: '+ suma/contador);