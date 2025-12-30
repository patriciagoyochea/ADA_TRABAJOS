//Ejercicio 1: Añadir personajes a una lista
//Tienes una lista de personajes de videojuegos ["Link", "Zelda"]. Agrega los personajes "Mario" y
//"Luigi" al final de la lista utilizando el método adecuado. Luego, muestra el array actualizado.
// Ejercicio 1: Añadir personajes a una lista

// 1. Declaramos una variable 'personajes' y le asignamos un array con dos valores iniciales.
let personajes = ["Link", "Zelda"];

// 2. Usamos el método .push() para agregar elementos AL FINAL del array.
// En este caso, agregamos dos strings nuevos: "Mario" y "Luigi".
personajes.push("Mario", "Luigi");

// 3. Imprimimos el array completo en la consola para ver cómo quedó la lista actualizada.
console.log(personajes);