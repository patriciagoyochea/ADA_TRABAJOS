//no uso la libreria porque no le estamos pidiendo nada al usuario
//const prompt = require('prompt-sync')();
//vamos a crear un programa que imprima un contador regresivo
//desde 5hs hasta 1hs utilizando tanto un bucle while como un do while

//Bucle while
console.log("Contador regresivo utilizando while:");
let contador = 5;
while (contador >= 1) {
    console.log(contador + " hs");
    contador--;
}
//Bucle do -while
console.log("Contador regresivo utilizando do-while:");
contador = 5;
do {
    console.log(contador + " hs");
    contador--;
} while (contador >= 1);        
