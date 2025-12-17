//Crea una función expresada llamada calcularFactorial que reciba un número y devuelva su factorial.
//Fórmula del factorial:
function calcularFactorial(num) {
    if (num < 0) {
        return "El factorial no está definido para números negativos.";
    }
    if (num === 0 || num === 1) {
        return 1;
    }
    return num * calcularFactorial(num - 1);
} 
console.log(calcularFactorial(5)); // Output: 120
console.log(calcularFactorial(0)); // Output: 1
console.log(calcularFactorial(-3)); // Output: El factorial no está definido para números negativos.    