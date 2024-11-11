"use strict";
const calculadora = (a, b, operacion) => {
    switch (operacion) {
        case 'suma':
            return a + b;
        case 'resta':
            return a - b;
        case 'multiplicacion':
            return a * b;
        case 'division':
            if (b === 0) {
                throw new Error('No se puede dividir por 0');
            }
            return a / b;
        default:
            throw new Error('Operación no válida');
    }
};
console.log(calculadora(2, 4, 'suma'));
console.log(calculadora(2, 4, 'resta'));
console.log(calculadora(2, 4, 'multiplicacion'));
console.log(calculadora(2, 4, 'division'));
console.log(calculadora(2, 0, 'division'));
