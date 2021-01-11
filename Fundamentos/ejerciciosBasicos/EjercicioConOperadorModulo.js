/**
 * mostrar numeros impares que esten dentro de
 * dos numeros dados
 */

var num_uno = parseInt(prompt('ingrese un numero'));
var num_dos = parseInt(prompt('ingrese otro numero'));

document.write("<h3>los numeros impares que estan en medio son</h3>")
if (num_uno < num_dos) {
    for (var index = num_uno+1; index < num_dos; index++) {
        if (index%2 != 0) {
            document.write(index+"<br>");
        }
        
    }

} else if (num_uno > num_dos) {
    for (var index = num_dos+1; index < num_uno; index++) {
        if (index%2 != 0) {
            document.write(index+"<br>");
        }
    }

}