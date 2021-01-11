function intervaloDeColores() {

    //sucede un evento cada cierto tiempo programado

    var tiempo = setInterval(function () {
        var encabezado = document.querySelector("h1");
        if (encabezado.style.color == "blue") {
            encabezado.style.color = "red";
        } else {
            encabezado.style.color = "blue";
        }
    }, 1000); //1000 ms = 1s
    
    return tiempo;
}

function intervaloDeUnColorUnaSolaVez(params) {
    // sucede un evento una sola vez despues del tiempo programado
    var tiempo2 = setTimeout(function () {
        var encabezado2 = document.querySelector("h2");
        encabezado2.style.color = "yellow";
    }, 1000);
    return tiempo2;
}

var tiempo = intervaloDeColores();
var tiempo2 = intervaloDeUnColorUnaSolaVez();

var stop = document.querySelector("#stop");
stop.addEventListener("click", function () {
    clearInterval(tiempo);
    clearTimeout(tiempo2);
});

var start = document.querySelector("#start");
start.addEventListener("click", function () {
    intervaloDeColores();
});