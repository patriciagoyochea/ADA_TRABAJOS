const prompt = require("prompt-sync")();

let numero = parseFloat(prompt("Ingresa una temperatura en grados celsius: "));
let fahrenheit = (numero * 9/5) + 32;

console.log("La temperatura en grados Fahrenheit es: " + fahrenheit + "°F");