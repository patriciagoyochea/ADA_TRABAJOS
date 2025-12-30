//Ejercicio 6: Buscar la última posición de un elemento repetido
//Tienes una lista de números [2, 5, 7, 2, 8, 7].
// Encuentra y muestra la última posición en la que aparece el número 7.
let listaNumeros = [2, 5, 7, 2, 8, 7];

// Usamos el método .lastIndexOf(7) que busca la ÚLTIMA vez que aparece el número 7 en la lista.
// A diferencia de indexOf (que busca el primero),este busca la ocurrencia más lejana.
let ultimaPosicion7 = listaNumeros.lastIndexOf(7);

console.log("La ultima posición del número 7 es: "+ ultimaPosicion7);