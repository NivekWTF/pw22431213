"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//Creamos la aplicacion a través del paquete express
//y llamamos a su constructor
const app = (0, express_1.default)();
//Todo lo que regresa al usuario es tipo JSON
app.use(express_1.default.json());
//Puerto para escuchar la petición del frontend
const PORT = 3001;
//Encendemos el servidor y lo ponemos en escucha
app.listen(PORT, () => {
    console.log('Servidor en ejecucion y escuchando en el puerto', PORT);
});