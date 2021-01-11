var formulario = document.querySelector('#formPeliculas');
formulario.addEventListener('submit', function () {
    var titulo = document.querySelector('#addPelicula').value;
    if (titulo.length >= 1) {
        localStorage.setItem(titulo, titulo);
    }
});
//agregar a la pagina web
var ul = document.querySelector('#listaPeliculas')
for (var i in localStorage) {
    //console.log(localStorage[i]);
    if (typeof localStorage[i] == 'string') {
        var li = document.createElement('li');
        li.append(localStorage[i]);
        ul.append(li);
    }
}
//para borrar las peliculas
var formularioBorrar = document.querySelector('#formBorrarPeliculas');
formularioBorrar.addEventListener('submit', function () {
    var titulo = document.querySelector('#borrarPelicula').value;
    if (titulo.length >= 1) {
        localStorage.removeItem(titulo);
    }
});