$(function () {
    $(".elemento").draggable(); //mover elemento

    $(".elemento").resizable(); //re-dimensionar elemento
 
    //$(".lista").selectable(); //seleccionar variios elementos

    //$(".lista").sortable(); //ordenar elemento en una lista a mi gusto
    $(".lista").sortable({ //para hacer algo despues de la accion
        update: function(event, ui){ //puede con un for recorrer la lista y guardarla en un BD
            console.log('cambio un elemento de la lista');
            console.log(event);
            console.log(ui);
        }
    }); 

    $('h3').tooltip(); //aparece un mensaje tenue al pasar por encima

    $('#aceptar').click(function(){
        $('#popup').dialog(); // tipo swals o alert
    });

    $('#calendario').datepicker(); //calendario al click en el input

    $('#pestana').tabs();

});

