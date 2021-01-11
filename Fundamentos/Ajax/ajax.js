//load
/**$('#datos').load('https://reqres.in/');**/

//get: listado de usuarios
$.get('https://reqres.in/api/users?page=2', function(respuesta){
    //console.log(respuesta);
    respuesta.data.forEach((elemento, indice) => {
        //prepend: añade antes de, append: añade despues de.
        $('#datos').append('<p>'+ elemento.first_name + ' ' + elemento.last_name + '</p>');
    });
});

//post: crear usuario
$('#formulario').submit(function (e) {
    e.preventDefault(); //la (e) como parametro y e.preventDefault() es para evitar que nos redireccione a otra pagina
    var usuario = {
        "first_name":$('input[name="nombre"]').val(),
        "last_name": $('input[name="apellido"]').val()
    };
    //console.log(usuario);
    //url = #formulario.action
    /*$.post($(this).attr('action'), usuario, function(respuesta){
        //console.log('respuesta:');
        console.log(respuesta);
    }).done(function(){
        alert('Usuario  añadido correctamente');
    });*/

    $.ajax({
        type:'POST', //encabezado type o method
        url: $(this).attr('action'), // la url
        data: usuario,
        beforeSend: function(){
            console.log('Enviando Usuario...');
        },
        success: function (response){
            console.log(response);
        },
        error: function(){
            console.log('A ocurrido un error');
        },
        timeout: 20000 // tiempo que puede demorar en ejecutarse, de lo contrario es un error
    });


    return false; //para que no redirija a otra pagina
});
