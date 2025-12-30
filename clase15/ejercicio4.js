//Ejercicio 4: Convertir una lista de palabras en una frase
//Tienes un array de palabras ["JavaScript", "es", "divertido"]. 
//Une todas las palabras en una sola frase, separadas por un espacio, y muestra el resultado.
let lista = ["La", "vida", "es" , "bella", "aun", "con", "sus", "luchas."];

//Usamos el método .join(" ") que une todos los elementos del array en un solo String.
//El espacio entre comillas (" ") indica qué caracter se usará para separar las palabras en la frase final.
let frase = lista.join(" ");
console.log(frase);