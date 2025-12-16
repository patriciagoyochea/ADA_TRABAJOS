//Escribe un programa que le pida al usuario dos números enteros (inicio y fin). El programa
//debe mostrar todos los números pares que se encuentran entre esos dos valores,
//incluyendo los límites si son pares. Utiliza un ciclo for para recorrer los números entre el
//inicio y el fin. Si el número inicial es mayor que el final, el programa debe mostrar un
//mensaje indicando que los valores son inválidos.

const prompt = require("prompt-sync")({ sigint: true });
let inicio = parseInt(prompt("Ingrese el número inicial (entero): "));
let fin = parseInt(prompt("Ingrese el número final (entero): "));
if (inicio > fin) {
  console.log("Los valores son inválidos. El número inicial no puede ser mayor que el número final.");
}
else {
  console.log("Números pares entre" + inicio + y + fin+ ":");
  //ciclo for recorrido:
  //A)let i = inicio;---> ojo la i no siempre arranca en 0 o en 1.
  //Aqui arranca en el numero que eligió el usuario como inicio.
  //B)i <= fin;---> el ciclo sigue hasta llegar al tope(variable "fin").
  //C)i++---> el incremento de la i es de a 1 en 1.
    for (let i = inicio; i <= fin; i++) 
      //filtro de pares(IF DENTRO DEL FOR)
      //En cada vuelta, la variable i cambia de valor.
      //preguntamos si el valor actual de i es par.
      {
        if (i % 2 === 0) {
          console.log(i); //si es par, lo mostramos por consola.
          //si es impar, no hacemos nada.(El ciclo simplemente pasa al siguiente numero)
        }
      }
}
