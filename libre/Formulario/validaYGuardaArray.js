
var checkbox = document.getElementById('terminos');
checkbox.addEventListener("change", validaCheckbox, false);
function validaCheckbox() {
    var checked = checkbox.checked;
    var elemento = document.getElementById("boton");
    if (checked) {
        //alert('checkbox1 esta seleccionado');
        elemento.disabled = false;
    }
    else {
        //alert('checkbox1 NO esta seleccionado');
        elemento.disabled = true;
    }
}


var registrosss = [];
function procesar() { //funcion llamada en el formConCheckbox.html
    const formulario = document.forms['usuarioForm'];
    const registro = {
        Nombre: formulario.elements[0].value,
        Monto: formulario.elements[1].value,
        Correo: formulario.elements[2].value
    };
    registrosss.push(registro);
    formulario.reset();
    formulario.elements[0].focus();
    console.log('todos los object',registrosss);
    console.log('el objeto 1',registrosss[0]);
    console.log('el nombre es',registrosss[0].Nombre);
    console.log('el nombre es', registro.Nombre);
    console.log("------------------------")
}

