//semaforo inteligente
//escribir un programa que le pida al usuario ingresar un color de semáforo (rojo, amarillo, verde) 
// y muestre un mensaje indicando la acción correspondiente: "Detenerse" para rojo, "Precaución" para amarillo 
// y "Avanzar" para verde. Utilizar el operador ternario para implementar la lógica.
//si el usuario ingresa un color diferente, mostrar "Color no válido".
//utilizar switch para resolver el ejercicio.
const prompt = require("prompt-sync")({ sigint: true });
let color = prompt("Ingrese un color de semáforo (rojo, amarillo, verde): ").toLowerCase();

switch (color) {    
    case "rojo":
        console.log("Detenerse");
        break;      
    case "amarillo":
        console.log("Precaución");
        break;  
    case "verde":
        console.log("Avanzar");
        break;  
    default:
        console.log("Color no válido");
        break;
}    