'use strict'
window.addEventListener('load', function () {

    var formulario = document.querySelector("#formulario");
    var box_dashed = document.querySelector(".dashed");
    box_dashed.style.display = "none";

    formulario.addEventListener('submit', function () {

        var nombre = document.querySelector("#nombre").value;
        var apellidos = document.querySelector("#apellido").value;
        var edad = parseInt(document.querySelector("#edad").value);

        if (nombre.trim()== null || nombre.trim().length == 0) {
            alert("El nombre no es válido");
            return false
        }
        if (apellidos.trim()== null || apellidos.trim().length == 0) {
            alert("El apellido no es válido");
            return false
        }
        if (edad == null || edad <= 0 || isNaN(edad)) {
            alert("La edad no es válida");
            return false
        }

        box_dashed.style.display = "block";

        var pNombre = document.querySelector("#pNombre span");
        var pApellidos = document.querySelector("#pApellido span");
        var pEdad = document.querySelector("#pEdad span");

        pNombre.innerHTML = nombre;
        pApellidos.innerHTML = apellidos;
        pEdad.innerHTML = edad;

        /** En casos de no tener <!--parrafos para el dashed-->
         * los podemos crear desde JavaScript así
         * 
        var datos_usuario = [nombre, apellidos, edad];
        for (const key in datos_usuario) {
            var parrafo = document.createElement("p");
            parrafo.append(datos_usuario[key]);
            box_dashed.append(parrafo);
        }
        */

    });

});