//CICLO FOR ARRAY
//Crear un programa que permita registrar las notas de varios estudiantes usando
//arrays y mostrarlas por pantalla:
const prompt = require('prompt-sync')();
let notas = [];

// 2. DEFINIR EL TAMAÑO
// Para este ejercicio, decidimos que sean 5 estudiantes. 
// Podríamos pedirle este número al usuario también, pero acá lo dejamos fijo.
let cantidadEstudiantes = 5; 

console.log("Vamos a cargar las notas de " + cantidadEstudiantes + " estudiantes.");

// 3. EL CICLO DE CARGA
// Usamos un 'for' para repetir el pedido de nota 5 veces.
// IMPORTANTE: Arrancamos con 'let i = 0' porque los Arrays en programación 
// SIEMPRE empiezan contando desde la posición 0 (el índice).
for (let i = 0; i < cantidadEstudiantes; i++) {
    
    // 4. GUARDANDO EN EL CASILLERO EXACTO
    // Acá está la magia. 'notas[i]' significa: "En la lista 'notas', en el casillero número 'i'...".
    // - Vuelta 0: Guardamos en notas[0]
    // - Vuelta 1: Guardamos en notas[1]
    // ... y así hasta llenar todo.
    
    // Detalle visual: (i + 1).
    // Como la 'i' vale 0, al usuario le mostramos "Estudiante 1" (0 + 1) para que quede más lindo,
    // porque los humanos contamos desde el 1, no desde el 0.
    notas[i] = parseFloat(prompt("Ingresá la nota del estudiante " + (i + 1) + ": "));
}

console.log("--- Notas Ingresadas ---");
// 5. MOSTRAR LA LISTA COMPLETA
// Si hacemos console.log directo del array, la consola nos muestra todo el conjunto de datos juntos.
// Ej: [ 8, 9, 4, 10, 7 ]
console.log(notas);