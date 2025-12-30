//Ejercicio 9: Eliminar espacios innecesarios
//Tienes la siguiente cadena con espacios adicionales "Hola, mundo!"
//Elimina los espacios al inicio y al final y muestra la cadena resultante.
let saludo = "   Hola mundo!   ";

//Usamos el método .trim() que elimina automáticamente los espacios en blanco de ambos extremos del string.
// Guardamos el resultado limpio en la variable 'textoLimpio'.
let textoLimpio = saludo.trim();

console.log(textoLimpio);
