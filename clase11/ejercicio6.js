//Crea un programa que le pida al usuario un número y luego imprima su tabla de
//multiplicar desde el 1 hasta el 10. Usa un ciclo for.
const prompt = require("prompt-sync")();
let numeroTabla = parseInt(prompt("Ingrese un número para ver su tabla de multiplicar: "));

//encabezado de la tabla, mostramos un título antes de arrancar
console.log("--- Tabla del:", numeroTabla, "---");

//CICLO FOR(EL MOTOR)
//Aqui definimos cuantas multiplicaciones vamos a hacer
//let i=1---> empezamos a multiplicar por 1.
//i<=10---> terminamos de multiplicar cuando lleguemos a 10(inclusive).
//en cada vuelta pasamos al siguiente número i++ (i=i+1).
for (let i = 1; i <= 10; i++) {
    //PROCESO MATEMATICO (EN CADA VUELTA) 
    //Multiplicamos el numero que ingresó el usuario( numeroTabla que siempre es fijo).
    //por el contador actual del ciclo (i que va cambiando en cada vuelta).
    let resultado = numeroTabla * i;
    
    //SALIDA CON FORMARTO
    //armamos el texto para que se vea bonito.
    //concatenamos: "5" + " x " + "1" + " = " + "5".
    console.log(numeroTabla + " x " + i + " = " + resultado);
}