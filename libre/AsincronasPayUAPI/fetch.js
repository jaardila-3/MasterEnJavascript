console.log('funciona fetch')
/**Get */
function miFetchGet() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json; charset=utf-8");
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", "Basic cFJSWEtPbDhpa01tdDl1OjRWajhlSzRybG9VZDI3Mkw0OGhzcmFyblVB");

    const url = 'https://sandbox.api.payulatam.com/payments-api/rest/v4.9/customers/bbf8bdr0xnh';

    fetch(url, {method: 'GET', headers: myHeaders})
        .then(respuesta => respuesta.json()) //return una respuesta parseada en json
        .then(datos => {  //datos es respuesta.json
            console.log(datos); 
            var nombre = document.getElementById('Nombre2F');
            nombre.value = datos.fullName;
            var correo = document.getElementById('correo2F');
            correo.value = datos.email;
        })
        .catch(error => console.log(error));
}
//agregamos la funcionalidad al boton
document.querySelector('#botonP2').addEventListener('click', function () {
    miFetchGet();
});


/**POST */
function miFetchPost() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json; charset=utf-8");
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", "Basic cFJSWEtPbDhpa01tdDl1OjRWajhlSzRybG9VZDI3Mkw0OGhzcmFyblVB");

    var nombreEnvia = document.getElementById('Nombre1F');
    var correoEnvia = document.getElementById('correo1F');
    var json = JSON.stringify({ fullName: nombreEnvia.value, email: correoEnvia.value });
    console.log(json);
    const url = 'https://sandbox.api.payulatam.com/payments-api/rest/v4.9/customers/';    

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: json,
        redirect: 'follow'
      };

    fetch(url, requestOptions)
        .then(respuesta => respuesta.json()) //nos devuelve una respuesta y la parseamos
        .then(datos => {
            console.log(datos);
            console.log(typeof datos); //datos es respuesta.json
            var id = document.getElementById('idF');
            id.value = datos.id;
            var nombre = document.getElementById('Nombre2F');
            nombre.value = datos.fullName;
            var correo = document.getElementById('correo2F');
            correo.value = datos.email;
        })
        .catch(error => console.log('error', error));
}
//agregamos la funcionalidad al boton
document.querySelector('#botonP1').addEventListener('click', function () {
    miFetchPost();
});