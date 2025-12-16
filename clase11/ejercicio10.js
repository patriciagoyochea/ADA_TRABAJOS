//Crea un programa donde la computadora seleccione un número al azar entre 1 y 10. Luego,
//pide al usuario que adivine el número hasta 3 intentos. Si el usuario acierta en cualquiera
//de los intentos, muestra un mensaje de felicitación y detén los intentos restantes. Si no
//acierta después de los 3 intentos, muestra el número secreto. Usa un for para resolver
//este ejercicio.
const prompt = require("prompt-sync")();

//GENERACION DEL NÚMERO SECRETO(MÁQUINA DE AZAR)
//a)qui usamos Math.random() para generar un número decimal aleatorio entre 0.0 (inclusive) y 0.99 (exclusive).
//EJEMPLO: 0.543
//b)*10: movemos la coma. Ahora es entre 0.0 y 9.9.
//c)math.floor():"corta" los decimales hacia abajo. Nos queda un número entero entre 0 y 9.
//d)+1: le sumamos 1 para que el rango sea entre 1 y 10 (en vez de 0 a 9).

const numeroSecreto = Math.floor(Math.random() * 10) + 1;

console.log("¡He pensado un número del 1 al 10!Tienes 3 intentos para adivinarlo.");

//LA BANDERA(FLAG)
//Creamos una variable testigo.
//Empieza en false porque al principio del juego todavia no ganamos.
//si el usuario adivina el número, la ponemos en true.
let adivinado = false;

//CICLO FOR(LOS INTENTOS)
//le damos al usuario 3 oportunidades para adivinar el número
for (let intento = 1; intento <= 3; intento++) {
    //PEDIMOS EL NÚMERO AL USUARIO
    let intento = parseInt(prompt("Intento " + intento + ": ¿Cuál es tu número? "));
//VERIFICAMOS SI EL NÚMERO ES CORRECTO
    if (intento === numeroSecreto) {
        console.log("¡Felicidades! ¡Has adivinado el número secreto!");
        adivinado = true;
    //AVISAMOS QUE GANÓ
    ganaste= true;//levantamos la bandera
    //rompemos el ciclo para no darle más intentos
    break;
    } else {console.log("Número incorrecto. Inténtalo de nuevo.");}
}
//FINAL DEL JUEGO
//Preguntamos si la bandera sigue en false
//si es así, significa que el usuario no adivinó en los 3 intentos
if (ganaste) {
    console.log("Lo siento, no has adivinado el número. El número secreto era: " + numeroSecreto);
}