'use strict'
//JSON= JS OBJECT NOTATION

var movie = {
    tittle: 'batman vs superman',
    year: 2017,
    country: 'USA'
};

var movies = [
{tittle: 'la verdad duele', year: 2016, country: 'France'},
movie
];

console.log(movies);

var boxMovies = document.querySelector('#peliculas');

for (var index in movies) {
    var parrafo = document.createElement('p');
    parrafo.append(movies[index].tittle + ' - ' + movies[index].year);
    boxMovies.append(parrafo);
}

/** 
 * LOCALSTORAGE
*/
//Comprobar disponibilidad del localStorage en el navegador
if (typeof(Storage)!== 'undefined') {
    console.log('localStorage disponible');
}else{
    console.log('Incopatible con localStorage')
}
//guardar datos en el localStorage
localStorage.setItem('titulo', 'curso de JavaScript en localStorage');

//Recuperar elemento del localStorage
//document.querySelector('#peliculas').innerHTML=localStorage.getItem('titulo');

//guardar objetos dentro del localStorage
var usuario={
    nombre: 'Jorge Ardila',
    email: 'jorge@ardila',
    web: 'jorgeardila.com'
};
localStorage.setItem('usuario', JSON.stringify(usuario));
//El método JSON.stringify() convierte un objeto o valor de JavaScript en una cadena de texto JSON

//Recuperar objeto del localStorage
var user = JSON.parse(localStorage.getItem('usuario'));
console.log(user);
document.querySelector('#peliculas').append('usando objeto desde localStorage: ' + user.nombre);
//El método JSON.parse() convierte una cadena de texto en un objeto

//eliminar objeto del localStorage
//localStorage.removeItem('usuario');

//eliminar todos los datos del localStorage
//localStorage.clear();