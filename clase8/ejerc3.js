const prompt = require('prompt-sync')();
let numero1 = parseFloat(prompt("Ingrese un número entero: "));
let numero2 = parseFloat(prompt("Ingrese otro número entero: "));
suma= numero1 + numero2;
console.log("La suma de los dos números es: " + suma);