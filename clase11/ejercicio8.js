//Escribe un programa que le pida al usuario un número entero positivo y muestre todos los
//múltiplos de ese número entre 1 y 100. Utiliza un ciclo for para resolverlo.
const prompt = require("prompt-sync")();
let numeroUsuario = parseInt(prompt("Ingrese un número para buscar sus multiplos(entre 1 y 100): "));
console.log("Los múltiplos de", numeroUsuario, "entre 1 y 100 son:");

//CICLO FOR(EL ESCANER)
//VAMOS A REVISAR TODOS LOS NÚMEROS DEL 1 AL 100
for (let i = 1; i <= 100; i++) {
    //LOGICA DE MULTIPLO (EL FILTRO)
    //Volvemos a usar el operador módulo(%).
    //matematicamente, un número es múltiplo de otro si al dividirlos el resto es cero.

    //la pregunta que hace el if es:
    //si divido el numero actual del ciclo(i) por el número que ingresó el usuario(numeroUsuario)
    //¿me sobra cero?

    //EJEMPLO:
    //Si el usuario ingresa 5:
    //vuelta 4 : 4 % 5 da resto 0?. No.(SE SALTA)
    //Vuelta 5: 5 % 5 da resto 0?. Si.(IMPRIME 5)
    //Vuelta 6: 6 % 5 da resto 0?. No.(SE SALTA)
    //Vuelta 10: 10 % 5 da resto 0?. Si.(IMPRIME 10)
    if (i % numeroUsuario === 0) {
        //SALIDA
        console.log(i); //Solo mostramos los que pasaron la prueba.
    }
}