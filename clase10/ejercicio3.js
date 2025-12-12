const prompt = require('prompt-sync')();
const EDAD_MINIMA = 18;
const EDAD_MAXIMA = 99;
let edadUsuario = parseInt(prompt("Por favor, ingresa tu edad: "));
if (edadUsuario>= EDAD_MINIMA && edadUsuario <= EDAD_MAXIMA) {
    console.log("¡Bienvenido!");
} else {
    console.log("Lo siento, no cumples con los requisitos de edad.");
}