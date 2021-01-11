
/**
 * ingresar dos numeros y mostrar los que estan en medio
 */
var num_uno = parseInt(prompt('ingrese un numero'));
var num_dos = parseInt(prompt('ingrese otro numero'));

document.write("<h3>los numeros que estan en medio son</h3>")
if (num_uno < num_dos) {
    for (var index = num_uno+1; index < num_dos; index++) {
        document.write(index+"<br>");
    }

} else if (num_uno > num_dos) {
    for (var index = num_dos+1; index < num_uno; index++) {
        document.write(index+"<br>");
    }

}


