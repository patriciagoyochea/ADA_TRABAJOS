//utilizamos corchetes para indicar el inicio y el final del array, y usamos comas 
//para separar los elementos dentro del array.
//dentro de un array podemos almacenar cualquier tipo de dato, como números, cadenas de texto,
//booleanos, objetos, e incluso otros arrays.
//cada elemento dentro del array tiene un índice, que es un número que indica su posición
//dentro del array. Los índices comienzan en 0, lo que significa que el primer elemento
//tiene un índice de 0, el segundo elemento tiene un índice de 1, y así sucesivamente.
//length es una propiedad que nos permite conocer la longitud o cantidad de elementos que
//hay en un array o en una cadena de texto.(string)

//mostrar un array completo
let colores = ["rojo", "verde", "azul", "amarillo"];
console.log(colours);

let frutas = ["manzana", "banana", "cereza", "naranja", "uva"];
console.log(frutas);

let numeros = [11, 22, 33, 44];
console.log(numeros);

let valoresBooleanos = [true, false, true, false];
console.log(valoresBooleanos);

let mezcladitos = [11, true, "patricia", colores];
console-log(mezcladitos);

//acceder a un dato especifico dentro del array
console.log(frutas[2]);//azul

//arrays dentro de arrays (arrays multidimensionales)
console.log(mezcladitos[3][1]);//verde

//conocer la longitud de un array
console.log("La cantidad de frutas es: " + frutas.length);
console.log("La cantidad de colores es: " + colores.length);
