/**
 * tabla de multiplicar de un numero
 */
var numero = parseInt(prompt("ingresa un numero"));

document.write("<h2>tabla del " + numero + "</h2>");
for (let index = 1; index < 11; index++) {
    let resultado = numero * index;
    document.write(numero + " x " + index + " = " + resultado + "<br>")

}

//se muestran todas las tablas
document.write("<h1>todas las tabla de multiplicar");
for (let index = 1; index < 11; index++) {
    document.write("<h3>tabla del " + index + "</h3>");
    for (let j = 1; j < 11; j++) {
        let resultado = j * index;
        document.write(index + " x " + j + " = " + resultado + "<br>")
    }
}
