//●	Ejercicio 3: Agregar y eliminar a la fila de mascotas
//Tienes una fila de mascotas en una clínica veterinaria ["Perro", "Gato", "Conejo"].
//Llega un "Hámster" que debe ser atendido primero. Agrega el "Hámster" al inicio de la lista. 
//Luego, atiende a la primera mascota de la fila y muéstrala. Finalmente, muestra la lista actualizada
let mascotas = ["Perro ", "Gato ", "Conejo "]

//Usamos el método .unshift() para agregar un elemento ("Hámster") AL PRINCIPIO de la lista.
// Ahora "Hámster" pasa a estar en la posición 0.
mascotas.unshift("Hamster");

// Guardamos al animal que sacamos de la fila en la variable 'atendido'.
let atendido = mascotas.shift();

console.log("mascota atendida " + atendido);
console.log("Fila actual de  mascotas: " + mascotas);
