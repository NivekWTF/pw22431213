let elemento = document.querySelector("#elemento");
let agregar = document.querySelector("#agregar");
let lista = document.querySelector("#listadinamica");
elemento.focus();

agregar.addEventListener("click", () => {
    if (elemento.value.trim() != "") {
        let nuevoelemento = document.createElement("li");
        nuevoelemento.innerText = elemento.value;
        lista.appendChild(nuevoelemento);
        elemento.value = "";
        elemento.focus(); 
    }   
});

elemento.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        agregar.click();
    }
});

//Arrastrar y soltar
let arrastra = document.querySelector("#arrastrar");
let zonasoltar = document.querySelector("#zonasoltar");

arrastra.addEventListener("dragstart", (e) => {
    e.target.style.border = "5px solid red";
    console.log("DragStart");
});   

zonasoltar.addEventListener("dragover", (e) => {
    e.preventDefault();
});

zonasoltar.addEventListener("drop", (e) => {
    e.preventDefault(); // Important to prevent default drop behavior
    arrastra.style.border = "none";
    arrastra.style.display = "block";
    e.currentTarget.append(arrastra); // Use e.currentTarget
});