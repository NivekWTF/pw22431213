let titulo = document.getElementById("titulo");


console.log(titulo);

let principal = document.querySelector(".principal");
console.log(principal);

let lista = document.querySelectorAll("ul.lista > li");
console.log(lista);

titulo.innerText = "Estructurando el DOM"
titulo.innerHTML = "<em> Nuevo DOM </em>"

let foto = document.querySelector("img");
foto.setAttribute("src", "https://img.icons8.com/?size=256&id=Nkym0Ujb8VGI&format=png");
foto.classList.add("fotocambio")

principal.style.backgroundColor = "#ffcc00";

let extra = document.querySelector(".extra");
document.body.removeChild(extra);

let nuevoarticle = document.createElement("article");
nuevoarticle.innerText = "Nuevo articulo";
nuevoarticle.style.color = "white";
nuevoarticle.style.backgroundColor = "purple";
nuevoarticle.style.padding = "20px";

document.body.appendChild(nuevoarticle);

//Eventos
let boton = document.querySelector("button");
// boton.addEventListener("click", () => {
//     alert("Boton presionado");
// });
muestramensaje = (mensaje) => {
    alert(mensaje);
}
boton.addEventListener("click", muestramensaje.bind(null,"Hola"));