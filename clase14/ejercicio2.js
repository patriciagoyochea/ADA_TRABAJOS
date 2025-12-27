//Solicita al usuario cinco calificaciones y usa una función flecha para calcular el promedio.
const prompt = require('prompt-sync')();
const calcularPromedio = (n1, n2, n3, n4, n5) => (n1 + n2 + n3 + n4 + n5) / 5;
let c1 = parseFloat(prompt("Calificación 1: "));
let c2 = parseFloat(prompt("Calificación 2: "));
let c3 = parseFloat(prompt("Calificación 3: "));
let c4 = parseFloat(prompt("Calificación 4: "));
let c5 = parseFloat(prompt("Calificación 5: "));
console.log("El promedio es: " + calcularPromedio(c1, c2, c3, c4, c5));