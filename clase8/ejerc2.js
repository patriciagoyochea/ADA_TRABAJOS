const prompt = require('prompt-sync')();
let numero = parseInt(prompt("Ingrese un número entero positivo, negativo o igual a cero: "));
if (numero > 0) {
    console.log("El número es positivo.");
} else if (numero < 0) {
    console.log("El número es negativo.");
} else {
    console.log("El número es igual a cero.");
}