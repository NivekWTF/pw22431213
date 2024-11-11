let numeros: number;
numeros = 101;
console.log(numeros);

let arreglonumeros: number[];
arreglonumeros = [1, 2, 3, 4, 5];
console.log(arreglonumeros);

let arreglostrings: string[];
arreglostrings = ['hola', 'mundo', 'typescript', 'cadena'];
console.log(arreglostrings);

let decisiones: boolean;
decisiones = true;
console.log(decisiones);

let arreglobooleanos: boolean[];
arreglobooleanos = [true, false, true, true];

function info(a:number, b:string, c:boolean, d?:number): void{ //? parametro opcional
    console.log(a + " "+ b + " " + c+ " "+ (d == undefined ? 'no hay valor': d));
}
info(1, '2', false, 10);

enum TipoUsuario{
    Administrador,
    Moderador,
    Invitado
}
type Usuario = 
{
    nombre: string,
    tipo: TipoUsuario,
    edad: boolean,
    readonly ipsecreta?: string
}
type UsuarioRedes = Usuario & //extendiendo el tipo
{
    ip: string,
}
function usuarios (usuario: UsuarioRedes): void{
    console.log("Nombre: "+ usuario.nombre + " | Tipo: "+ usuario.tipo + " | Edad: "+ usuario.edad+ " | IP: "+ usuario.ip, " | IP secreta: "+ usuario.ipsecreta);
}
console.log(usuarios({nombre: 'Juan', tipo: TipoUsuario.Moderador, edad: true, ip: '192.168.4.1', ipsecreta: 'algo'}));

//Tipos que solo existen en TypeScript

let tiempo:number = 76_000_000;
let animal:string = 'dinosaurio';
let extinto:boolean = true;

//Tipo any
let mivariable;
mivariable = "cadena";
mivariable = 42;

//Arreglos
let animales: string[] = ['perro', 'gato', 'pez'];
let numeros1:number[] = [1, 2, 3, 4, 5];
let atributos:boolean[] = [];
let numeros2: Array<number> = [1, 2, 3, 4, 5];

// animales.map(x => x.)

//Tuplas
let tupla:[number, string] = [1, 'hola'];
tupla.push(12);

let tupla2:[number, string[]] = [1, ['cadena, cadena2', 'cadena3']];

//Enums
const chica = 's'
const mediana = 'm'
const grande = 'l'
const extraGrande = 'xl'

// enum Talla {chica = 10, mediana, grande, extraGrande}
enum Talla {chica = 's', mediana = 'm', grande = 'l', extraGrande = 'xl'}
const tallagrande = Talla.grande;
console.log("Talla: " + tallagrande);

//Ponemos const para ocultar la enum del JS
const enum EstadoCargaPagina{SinIniciar, Cargando, Exito, Error}
//Solamente sale la asignacion del valor explicito en el JS
const estado = EstadoCargaPagina.Exito;

//Objetos

const objeto:{
    readonly id:number, 
    nombre:string
} = { id:1, nombre:''}
// objeto.id = 50;
objeto.nombre = 'PW';

const objeto2:{id:number, nombre?:string} = {id:1}
objeto2.nombre = 'PW';

const objeto3:{id:number, nombre:string, talla:Talla} = {id:1, nombre:'PW', talla:Talla.chica}

type Persona = {
    id:number,
    nombre:string,
    talla:Talla
}

const objeto4:Persona = {id:1, nombre:'PW', talla:Talla.extraGrande}

type Direccion = {
    numero:number,
    calle:string,
    pais: string
}

type Persona2 = {
    id:number,
    nombre:string,
    talla:Talla,
    domicilio:Direccion
}

const objeto5:Persona2 = {id:1, nombre:'PW', talla:Talla.extraGrande, domicilio:{numero:123, calle:'conocida', pais:'Mexico'}}

//Tipado de funciones

function func(){}

const fn1 = (y:number):number => {
    let x = 2;

    if(x > 5){
        return y
    }
    return 4;
}

const fn2: () => void = () => {
    let x = 2
    if(x > 5){
        return 2
    }
    return 4;
}

const fn3: (a:number) => string = (edad:number) => {
    if (edad > 18){
        return 'Mayor de edad'
    }
    return 'Menor de edad'
}

//Never: se usa cuando necesitemos que la funcion lance un error
function ErrorUsuario1():never{
    throw new Error('Error de usuario')
}
function ErrorUsuario2():never{
    throw new Error('Error de usuario')
}
