document.write("<h1>Hola</h1>");
console.log("Hola mundo desde consola");
//console.error("Error en la consola");

// Variables
let x;
console.log(typeof (x));
let esPW = false;
console.log(typeof (esPW));

if (esPW) {
    console.log("Estamos en clase de PW");
} else {
    console.log("No estamos en clase de PW");
}

let numero = -2324.242324;
console.log(numero);

let cadena = "una cadena 'comillas'";
console.log(cadena);
let cadena2 = 'otra cadena "al revés"';
console.log(cadena2);
//interpolacion de variables
let cadena3 = `una cadena ${numero} incluso puedo 
tener renglones 
y variables ${numero}`; ;
console.log(cadena3);

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1);

let usuario = {nombre: "Martin", [id1]: 123};
console.log(usuario.nombre+ " "+ usuario[id1]);

let variablenula = null;
console.log(variablenula);

const PI = 3.1416;
console.log(PI);

let arreglo = [];
console.log(arreglo);
arreglo = [1,2,3,4,5];
console.log(arreglo);
arreglo.push(6);
console.log(arreglo);
arreglo.pop();
console.log(arreglo);
arreglo.shift();
console.log(arreglo);
arreglo.unshift(10);
console.log(arreglo);

let objeto = {nombre: "Martin", edad: 47};
console.log(Object.keys(objeto));
console.log(Object.values(objeto));
console.log(Object.entries(objeto));

alert("Alerta en pantalla");
let edad = prompt("Dame un valor", 0);
console.log(edad);
