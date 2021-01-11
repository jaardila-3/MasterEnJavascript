"use strict"

//mouse events

var boton2 = document.querySelector("#boton2");

function alternaColor() {
    var bg = boton2.style.background;

    if (bg == "green") {
        boton2.style.background = "red";
    } else {
        boton2.style.background = "green";
    }
    return true;
}
//event click

var boton3 = document.querySelector("#boton3");

boton3.addEventListener('click', function () { // "dblclick" // doble click
    var bg = boton3.style.background;
    if (bg == "green") {
        boton3.style.background = "red";
    } else {
        boton3.style.background = "green";
    }
    boton3.style.border = "1px solid #ccc";
    this.style.padding = "7px";//tambien se puede con this
});

// event mouse over

var boton4 = document.querySelector("#boton4");
boton4.addEventListener("mouseover", function () {
    boton4.style.background = "#ccc";
});

// event mouse out

boton4.addEventListener("mouseout", function () {
    boton4.style.background = "yellow";
});

// keyboard events

//focus
var input = document.querySelector("#campoNombre");

input.addEventListener("focus", function () {
    //instrucciones cuando escriba dentro del input
    console.log("[focus] estas dentro del input");
});

//blur
input.addEventListener("blur", function () {
    //instrucciones cuando salga del input
    console.log("[blur] estas fuera del input")
});

//keydown
input.addEventListener("keydown", function (event) {
    //instrucciones cuando presione una tecla
    const keyName = event.key;
    console.log("[keydown] pulsando la tecla: " + keyName);
});

//keypress
input.addEventListener("keypress", function (event) {
    //instrucciones mientras presione una tecla
    const keyName = event.key;
    console.log("[keypress] tecla presionada: ", keyName);
});

//keyup
input.addEventListener("keyup", function (event) {
    //instrucciones cuando deja de presionar una tecla
    const keyName = event.key;
    console.log("[keyup] tecla soltada: ", keyName);
});

/**
 * con el evento LOAD:
 * window.addEventListener('load', function(){
 * //todo el codigo JS
 * });
 * podemos insertar el script en el head del HTML y no al final del body
 */