import express from 'express';
//Creamos la aplicacion a través del paquete express
//y llamamos a su constructor

const app = express();

//Todo lo que regresa al usuario es tipo JSON
app.use(express.json());

//Puerto para escuchar la petición del frontend
const PORT = 3001;

app.get('/hola', (_req, res) => {
    let fecha = new Date().toLocaleDateString();
    res.send('mundo! La fecha de hoy es: ' + fecha+ " con typeScript");
})

//Encendemos el servidor y lo ponemos en escucha
app.listen (PORT, () => {
    console.log('Servidor en ejecucion y escuchando en el puerto', PORT);
}
);