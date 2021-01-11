'use strict';

//fetch y peticiones a servicios / api rest

var divUsuarios = document.querySelector('#usuarios');

//metodo uno
/** 
var usuarios = [];
fetch('https://jsonplaceholder.typicode.com/users') //promesa
    .then(data => data.json()) // capturamos datos y los pasamos a json
    .then(data => { //funcion de callback con return pero simplificada
        usuarios = data;
        console.log(usuarios);

        usuarios.map((data, i) => {  //map es igual que un for in
            let nombre = document.createElement('h2');
            nombre.innerHTML = 'posicion ' + i + '. ' + 'id: ' + data.id + ' nombre: ' + data.name;
            divUsuarios.appendChild(nombre);
            document.querySelector('.loading').style.display = 'none';
        })
    });
*/

//metodo dos
/** 
fetch('https://jsonplaceholder.typicode.com/users') //promesa
    .then(data => data.json())
    .then(data => {
        console.log(data); //uso academico
        listadoUsuarios(data);
    });

function listadoUsuarios(usuarios) {
    usuarios.map((data, i) => {  //map es igual que un for in
        let nombre = document.createElement('h3');
        nombre.innerHTML = 'posicion ' + i + '. ' + 'id: ' + data.id + ' nombre: ' + data.name;
        divUsuarios.appendChild(nombre);
        document.querySelector('.loading').style.display = 'none';
    });
}
*/

//metodo tres: pidiendo tambien un usuario en especifico
//se utiliza otra web de apis rest: requres.in que el usuario tiene avatar
var divsoloUsuarioDos = document.querySelector('#soloUsuarioDos');

getUsuarios()
    .then(data => data.json())
    .then(users => {
        console.log(users.data); //uso academico
        listadoUsuarios(users.data);

        return getUsuarioDos();
    })
    .then(data => data.json())
    .then(user => {
        console.log(user.data); //uso academico
        mostrarUsuarioDos(user.data);
    });

function getUsuarios() {
    return fetch('https://reqres.in/api/users'); //promesa
}

function getUsuarioDos() {
    return fetch('https://reqres.in/api/users/2'); //enlace de usuario dos
}

function listadoUsuarios(usuarios) {
    usuarios.map((user, i) => {
        let nombre = document.createElement('h3');
        nombre.innerHTML = 'posicion ' + i + '. ' + 'nombre: ' + user.first_name + ' ' + user.last_name;
        divUsuarios.appendChild(nombre);
        document.querySelector('.loading').style.display = 'none';
    });
}

function mostrarUsuarioDos(user) {
    let nombre = document.createElement('h4');
    let avatar = document.createElement('img');

    nombre.innerHTML = 'nombre del usuario dos: ' + user.first_name + ' ' + user.last_name;
    avatar.src = user.avatar; // url del avatar
    avatar.width = '100';

    divsoloUsuarioDos.appendChild(nombre);
    divsoloUsuarioDos.appendChild(avatar);

    document.querySelector('#soloUsuarioDos .loading').style.display = 'none';
}

//como crear una promesa
/** 
function getInfo() {
    var estudiante = { //objeto json
        nombre: 'Jorge',
        apellidos: 'Ardila',
        url: 'https://github.com/jaardila-3'
    };
    return new Promise((resolve, reject)=>{
        var estudianteString = JSON.stringify(estudiante);
        if(typeof estudianteString != 'string'){
        return reject("Error: la promesa no se cumplio, no devolvio una cadena de texto");
        }
        return resolve(estudianteString); //si se cumple la promesa
    });    
}
*/

//utilizando un setTimeout
function getInfo() {
    var estudiante = { //objeto json
        nombre: 'Jorge',
        apellidos: 'Ardila',
        url: 'https://github.com/jaardila-3'
    };
    return new Promise((resolve, reject) => {
        var estudianteString = '';

        setTimeout(() => {
            estudianteString = JSON.stringify(estudiante);
            if (typeof estudianteString != 'string' || estudianteString == '') {
                return reject("Error: la promesa no se cumplio, no se cumplio la validación");
            }
            return resolve(estudianteString); //si se cumple la promesa
        }, 3000); //espera 3s para ejecutarse

    });
}

//como utilizarla
var divEstudiante = document.querySelector('#estudiante');
getInfo()
    .then(data => {
        console.log(data);
        divEstudiante.innerHTML = data;
    })
    .catch(error => {  // para capturar el error
        console.log('He aquí el problema: ', error);
        alert('No se realizaron las peticiones');
    });