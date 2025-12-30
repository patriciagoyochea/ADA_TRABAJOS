//Ejercicio 7: Verificar si una lista contiene un elemento
//Tienes una lista de comidas ["Pizza", "Hamburguesa", "Tacos"]. Verifica si "Sushi" 
//está en la lista y muestra un mensaje que confirme si está o no.
let listaDeComidas = ["Pizza", "Hamburguesa", "Tacos"];

//Usamos el método .includes() para verificar si "Sushi" existe dentro del array.
// Este método devuelve un valor booleano: true (si está) o false (si no está).
let tieneSushi = listaDeComidas.includes("Sushi");

if (tieneSushi){
    console.log("La comida sushi está en la lista")
} else{
    console.log("La comida Sushi no está en la lista")
}