const prompt = require('prompt-sync')();
let numero = parseFloat(prompt("Ingrese un número cualquiera: "));
let mostrarMensaje = numero > 0 ? "El número es positivo" : numero < 0 ? "El número es negativo" : "El número es cero";
console.log(mostrarMensaje);