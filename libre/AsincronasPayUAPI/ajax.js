console.log('funciona ajax')
/**GET */
function miAjaxGet() {
    var peticion = new XMLHttpRequest();
    var url = 'https://sandbox.api.payulatam.com/payments-api/rest/v4.9/customers/bbf8bdr0xnh'
    peticion.open('GET', url, true); //true no es necesario
    peticion.setRequestHeader('Content-Type', 'application/json; charset=utf-8')
    peticion.setRequestHeader('Accept', 'application/json')
    peticion.setRequestHeader('Authorization', 'Basic cFJSWEtPbDhpa01tdDl1OjRWajhlSzRybG9VZDI3Mkw0OGhzcmFyblVB')
    peticion.send();
    peticion.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            console.log(typeof this.responseText);
            const obj = JSON.parse(this.responseText);
            console.log(obj);
            console.log(typeof obj);
            document.querySelector('#idA').value = obj.id;
            document.getElementById('Nombre2A').value = obj.fullName;
            document.querySelector('.correo2A').value = obj.email;
        }
    }
}
//agregamos la funcionalidad al boton
document.querySelector('#botonA2').addEventListener('click', function () {
    miAjaxGet();
});


/**POST */
function miAjaxPost() {
    var peticion = new XMLHttpRequest();
    var url = "https://sandbox.api.payulatam.com/payments-api/rest/v4.9/customers/";
    var nombreEnvia = document.getElementById('Nombre1A');
    var correoEnvia = document.getElementById('correo1A');
    var json = JSON.stringify({ fullName: nombreEnvia.value, email: correoEnvia.value });   
    peticion.open("POST", url, true);
    peticion.setRequestHeader('Content-Type', 'application/json; charset=utf-8')
    peticion.setRequestHeader('Accept', 'application/json')
    peticion.setRequestHeader('Authorization', 'Basic cFJSWEtPbDhpa01tdDl1OjRWajhlSzRybG9VZDI3Mkw0OGhzcmFyblVB')    
    console.log(json);
    peticion.send(json);    
    peticion.onreadystatechange = function () {        
        if (peticion.readyState == XMLHttpRequest.DONE && peticion.status == 201) { // tener encuenta los status= 200, 201, 202...            
            console.log(peticion.responseText);
            console.log(typeof this.responseText);
            const obj = JSON.parse(this.responseText);
            console.log(obj);
            console.log(typeof obj);
            document.querySelector('#idA').value = obj.id;
            document.getElementById('Nombre2A').value = obj.fullName;
            document.querySelector('.correo2A').value = obj.email;
        }
    }    
}

document.querySelector('#botonA1').addEventListener('click', function () {
    miAjaxPost();
});