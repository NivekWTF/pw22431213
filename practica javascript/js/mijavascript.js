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

//alert("Alerta en pantalla");
//let edad = prompt("Dame un valor", 0);
//console.log(edad);

let variable = "valor";
const constante = "valor constante";

function miFuncion(a = 2) { //valor por defecto
    return 2*a;
}

console.log(miFuncion(6));

const funcionflecha = (a = 10) => {
    return 2*a;
}
console.log(funcionflecha(7));


// Destructuring - Desestructuración
// Objetos

const usuarios = {
    nombre: "Martin",
    apellido: "Nevarez",
}

/*let nombre = usuarios.nombre;
let apellido = usuarios.apellido;*/
let { nombre, apellido} = usuarios;
console.log(nombre + " " + apellido);

//Otro objeto
const usuarios2 = {
    nombre: "Martin",
    apellido: "Nevarez",
    redes:{
        sociales: {
            twx: '@miusuario',
            face: '@miface'
        }
    }
}

//const face = usuarios2.redes.sociales.face;
// const {twx, face} = usuarios2.redes.sociales;
// console.log(face);

const {redes: {sociales: {twx, face}}} = usuarios2;
console.log(twx);

// Arreglos
const arregloNombres = ['Juan', 'Pedro', 'Pablo'];
// let nombre1 = arregloNombres[0];
// let nombre2 = arregloNombres[1];
// let nombre3 = arregloNombres[2];
const [nombre1,,nombre3] = arregloNombres; 
console.log(nombre1 + " " + nombre3);

// Combinaciones
//Objetos

const usuario3 = {
    direccion: 'conocida',
    numerocasa: '300'
}

//propagacion de campos
const nuevoObjeto = {...usuarios2,...usuario3};
console.log(nuevoObjeto);

//Arreglos
const arregloApellidos = ['Perez', 'Gomez', 'Lopez'];
const nuevoArreglo = [...arregloNombres, ...arregloApellidos];
console.log(nuevoArreglo);

const otroNuevoArreglo = arregloNombres.concat(arregloApellidos);
console.log(otroNuevoArreglo);

//foreach, for, map, reduce
for (let i=0; i<nuevoArreglo.length; i++){
    console.log(nuevoArreglo[i]);
}

nuevoArreglo.forEach(function(nombre){
    console.log(nombre);
})

let numeros = [1,2,3,4,5];
let suma = 0;
numeros.forEach(function(numero){
    suma += numero;
})
console.log(suma);

//map
let precios =  [10,20,30,40,50];
const conversion = 0.85;
let preciosNuevos = precios.map(function(precio){
    return precio * conversion;
})
console.log(preciosNuevos);

//reduce
let sumaPrecios = precios.reduce(function(suma, precio){
    return suma + precio;
}, 0);
console.log(sumaPrecios);

//Clases

class Animal{
    constructor(nombre){
        this.nombre = nombre;
    }
    habla(){
        console.log(this.nombre + " hace un ruido");
    }
}

class Perro extends Animal{
    habla(){
        console.log(this.nombre + " ladra");
    }
}

const perro = new Perro("Firulais");
perro.habla();