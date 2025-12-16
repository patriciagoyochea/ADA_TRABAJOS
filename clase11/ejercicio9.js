//Crea un programa que simule la cuenta regresiva para el lanzamiento de un cohete. El
//programa debe contar desde 10 hasta 0 e imprimir "¡Despegue!" al final. Usa un ciclo for
//para realizar la cuenta regresiva.
const prompt = require("prompt-sync")();

//avisamos al usuario que empieza el programa antes de entrar al bucle
console.log("Iniciando cuenta regresiva para el lanzamiento del cohete...");

//CICLO FOR INVERSO(La cuenta regresiva))
//let i=10 ---> INICIO: empezamos la cuenta desde 10, el numero más alto.
//i>=0 ---> CONDICIÓN: el ciclo sigue vivo mientras i sea mayor o igual a 0.
//i-- ---> DECREMENTO: en cada vuelta le restamos 1 al contador.(10..9..8..7..etc)
for (let i = 10; i >= 0; i--) { 
    //ACCION REPETIDA
    //Mostramos cuanto falta para el despegue.
    console.log("T-minus:" + i);
}
//FINAL DEL CICLO
//esta linea esta fuera de las llaves por lo que solo se ejecuta una vez que el ciclo terminó.(CUANDO i es = -1
//si la condicion falla)
console.log("¡Despegue!");