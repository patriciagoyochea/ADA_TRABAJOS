//crear un programa que le pida al usuario un numero positivo. El programa deberá contar desde 1
//hasta ese numero e imprimir cada valor en la consola. usando ciclo for.
const prompt = require("prompt-sync")({ sigint: true });
let numero = parseInt(prompt("Ingrese un número positivo: "));
for (let i = 1; i <= numero; i++) {
    console.log(i);
}