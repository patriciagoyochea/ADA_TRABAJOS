const prompt= require('prompt-sync')();
const RANGO_MINIMO= 13;
const RANGO_MAXIMO= 17;
let numeroUsuario= parsefloat(prompt("Ingrese un número para verificar el rango: "));
if (numeroUsuario >= RANGO_MINIMO && numeroUsuario <= RANGO_MAXIMO) {
    console.log("El número está dentro del rango de 13 a 17.");
}else {
    console.log("El número está fuera del rango de 13 a 17.");
}