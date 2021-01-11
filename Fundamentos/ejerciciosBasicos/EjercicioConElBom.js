console.log(window.innerHeight);//altura//too (screen.height)
console.log(window.innerWidth);//ancho//too (screen.width)
console.log(window.location);//propiedades de la pagina
console.log(window.location.href);// url de la pagina

function redirect(url){
    window.location.href = url;
}// esta funcion al llamarla y pasarle una url redirige la pagina a la url indicada

function abrirVentanaNueva(url){
    window.open(url);//too (url,"","width=400,height=300"); para darle tamaño, lo saca en pop-up
}// esta funcion al llamarla y pasarle una url abre una vuena ventana con esa url
