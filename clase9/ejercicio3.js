const prompt= require('prompt-sync')();
//SI EL USUARIO ESCRIBE TRUE SERA VERDADERA SINO FALSA
let condicion1= prompt("Ingrese el primer valor booleano(true o false): ") === 'true';
let condicion2= prompt("Ingrese el segundo valor booleano(true o false): ") === 'false';

//mostrar en la terminal las diversas combinaciones logicas
console.log("Resultados lógicos:");
console.log("Condición 1 AND Condición 2: ", condicion1 && condicion2);
console.log("Condición 1 OR Condición 2: ", condicion1 || condicion2);
console.log("NOT Condición 1: ", !condicion1);
console.log("NOT Condición 2: ", !condicion2);
