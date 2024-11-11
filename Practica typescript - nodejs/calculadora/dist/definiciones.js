"use strict";
let numeros;
numeros = 101;
console.log(numeros);
let arreglonumeros;
arreglonumeros = [1, 2, 3, 4, 5];
console.log(arreglonumeros);
let arreglostrings;
arreglostrings = ['hola', 'mundo', 'typescript', 'cadena'];
console.log(arreglostrings);
let decisiones;
decisiones = true;
console.log(decisiones);
let arreglobooleanos;
arreglobooleanos = [true, false, true, true];
function info(a, b, c, d) {
    console.log(a + " " + b + " " + c + " " + (d == undefined ? 'no hay valor' : d));
}
info(1, '2', false, 10);
var TipoUsuario;
(function (TipoUsuario) {
    TipoUsuario[TipoUsuario["Administrador"] = 0] = "Administrador";
    TipoUsuario[TipoUsuario["Moderador"] = 1] = "Moderador";
    TipoUsuario[TipoUsuario["Invitado"] = 2] = "Invitado";
})(TipoUsuario || (TipoUsuario = {}));
function usuarios(usuario) {
    console.log("Nombre: " + usuario.nombre + " | Tipo: " + usuario.tipo + " | Edad: " + usuario.edad + " | IP: " + usuario.ip, " | IP secreta: " + usuario.ipsecreta);
}
console.log(usuarios({ nombre: 'Juan', tipo: TipoUsuario.Moderador, edad: true, ip: '192.168.4.1', ipsecreta: 'algo' }));
let tiempo = 76000000;
let animal = 'dinosaurio';
let extinto = true;
let mivariable;
mivariable = "cadena";
mivariable = 42;
let animales = ['perro', 'gato', 'pez'];
let numeros1 = [1, 2, 3, 4, 5];
let atributos = [];
let numeros2 = [1, 2, 3, 4, 5];
let tupla = [1, 'hola'];
tupla.push(12);
let tupla2 = [1, ['cadena, cadena2', 'cadena3']];
const chica = 's';
const mediana = 'm';
const grande = 'l';
const extraGrande = 'xl';
var Talla;
(function (Talla) {
    Talla["chica"] = "s";
    Talla["mediana"] = "m";
    Talla["grande"] = "l";
    Talla["extraGrande"] = "xl";
})(Talla || (Talla = {}));
const tallagrande = Talla.grande;
console.log("Talla: " + tallagrande);
const estado = 2;
