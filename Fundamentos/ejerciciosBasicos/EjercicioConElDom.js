var autor = document.getElementById("autor");
//tambien se puede usar el document.querySelector("nombre"); //para nombre de etiqueta
//tambien se puede usar el document.querySelector("#id"); //para id de la etiqueta
//tambien se puede usar el document.querySelector(".clase"); //para clase de la etiqueta
//NOTA: getElement selecciona varios elementos con el mismo id o class, querySelector solo uno

autor.innerHTML = "Curso de Jorge Ardila";
autor.style.color = "green";
autor.style.padding = "20px";
autor.className = "nuevaClase"; //le agrega una clase a la etiqueta

//conseguir elementos por su etiqueta
var todosLosH1 = document.getElementsByTagName("h1");
console.log(todosLosH1);

//crear elementos en la pagina
var newDiv = document.createElement("div");
var texto = document.createTextNode("hola, que tal!");
newDiv.appendChild(texto);

var currentDiv = document.querySelector("#crear");  //div actual
document.body.insertBefore(newDiv, currentDiv); // ingresa antes del div actual

var select = document.querySelector('.select');
var inner = select.querySelectorAll('.outer .inner'); // select verifica que el último elemento se encuentra dentro del rango de búsqueda.

console.log(select);
console.log(inner);