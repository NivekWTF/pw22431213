 //const operaciones = ['suma', 'resta', 'multiplicacion', 'division'];
 type Operaciones = 'suma' | 'resta' | 'division' | 'multiplicacion';
 const calculadora = (a: number, b: number, operacion: Operaciones): number  => {
        switch(operacion){
            case 'suma':
                return a + b;
            case 'resta':
                return a - b;
            case 'multiplicacion':
                return a * b;
            case 'division':
                if(b === 0){
                    // return 'No se puede dividir por 0';
                    throw new Error('No se puede dividir por 0');
                }
                return a / b;
            default:
                throw new Error('Operación no válida');
        }
        
}

console.log(calculadora(2, 4, 'suma')); // 6
console.log(calculadora(2, 4, 'resta')); // -2
console.log(calculadora(2, 4, 'multiplicacion')); // 8
console.log(calculadora(2, 4, 'division')); // 0.5
console.log(calculadora(2, 0, 'division')); // No se puede dividir por 0
//console.log(calculadora(2, 4, 'potencia')); // Operación no válida
