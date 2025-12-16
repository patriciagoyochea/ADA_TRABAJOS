//Los números pueden ser pares o impares. Escribe un programa que le pida al usuario un
//número y determine si es par o impar. Muestra un mensaje explicativo indicando qué
//significa cada caso.
const prompt = require("prompt-sync")({ sigint: true });
let numero = parseInt(prompt("Ingrese un número entero: "));
if (numero % 2 === 0) {
  console.log(
    `El número ${numero} es par. Un número par es aquel que es divisible por 2 sin dejar residuo.`
  );
} else {
  console.log(
    `El número ${numero} es impar. Un número impar es aquel que no es divisible por 2 y deja un residuo de 1.`
  );
}

//BONUS VERSION TERNARIO
//el "if ternario" es un atajo para escribir menos código.
// descomenta la linea de códigos para utilizarlo.
//let mensaje = (numero % 2 === 0) ? "ES PAR" : "ES IMPAR";
//console.log(mensaje);