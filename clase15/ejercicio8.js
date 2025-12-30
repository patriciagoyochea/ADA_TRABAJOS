//Ejercicio 8: Extraer una parte de una frase
//Tienes la frase "Los gatos son geniales". Extrae y muestra solo la parte "gatos" utilizando el método adecuado.
let fragmentoFrase = "Los gatos son geniales";

//Usamos el método .slice(inicio, fin) para cortar un pedazo del texto.
// El 4 es el índice donde empieza el corte (la letra "g") y el 9 es donde termina (sin incluirlo).
// Esto extrae exactamente la palabra "gatos".
let parteDelFragmento = fragmentoFrase.slice(4,9);

console.log(parteDelFragmento);