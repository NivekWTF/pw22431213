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