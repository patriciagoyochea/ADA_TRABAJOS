//Ejercicio 5: Buscar la posición de un elemento
//Tienes una lista de colores ["Rojo", "Verde", "Azul", "Amarillo"]. 
//Encuentra y muestra el índice del color "Azul" en la lista.
let colores = ["Rojo", "Verde", "Azul", "Amarillo"];

//Usamos el método .indexOf() para buscar en qué posición numérica se encuentra "Azul".
//Este método devuelve el número del índice (recordando que se cuenta desde 0).
let indice = colores.indexOf("Azul");

console.log("El indice del color Azul es: " + indice);