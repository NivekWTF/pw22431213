import express from 'express';
import cors from 'cors';
//Creamos la aplicacion a través del paquete express
//y llamamos a su constructor

const app = express();
//Configurar rutas para el acceso personal
import personalRutas from './routes/personalRutas';

//Activar el uso de CORS
app.use(cors());

//Todo lo que regresa al usuario es tipo JSON
app.use(express.json());

//Puerto para escuchar la petición del frontend
const PORT = 3001;
//Activar las ruta base
app.use('/api/personal', personalRutas);

// app.get('/hola', (_req, res) => {
//     let fecha = new Date().toLocaleDateString();
//     res.send('mundo! La fecha de hoy es: ' + fecha+ " con typeScript");
// })

//Encendemos el servidor y lo ponemos en escucha
app.listen (PORT, () => {
    console.log('Servidor en ejecucion y escuchando en el puerto', PORT);
}
);