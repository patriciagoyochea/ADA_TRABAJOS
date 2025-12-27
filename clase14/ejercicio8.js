//Creá la función backEnd() que recibirá 2 números como parámetros. La función deberá imprimir por pantalla los números del 1 al 100, pero teniendo en cuenta los siguientes criterios:
//Si el número a imprimir es múltiplo del primer parámetro que se ingresó, deberá mostrar el string “Back” en lugar del número.
//Si el número a imprimir es múltiplo del segundo parámetro ingresado, deberá mostrar el string “End” en su lugar del número.
//Si el número a imprimir es múltiplo de ambos parámetros, deberá mostrar el string “Back End” en lugar del número.


function backEnd(numero1,numero2){ 
//Iniciamos un ciclo que comienza en 1 y termina en 100 (inclusive).
// La variable 'i' representará el número actual en cada vuelta del bucle.
for (let i = 1; i <= 100; i++) {
//CRÍTICO: Debemos verificar PRIMERO si el número es múltiplo de AMBOS parámetros.
if (i % numero1 === 0 && i % numero2 === 0) {
        console.log("Back End");  

// 4. CONDICIONALES SECUENCIALES (ELSE IF)
// Si la condición anterior fue falsa, evaluamos si es múltiplo solo del primer número.
} else if (i % numero1 === 0) {
    console.log("Back");
            
// Si tampoco fue múltiplo del primero, evaluamos si es múltiplo solo del segundo
} else if (i % numero2 === 0) {
     console.log("End");
            
// 5. CASO POR DEFECTO (ELSE)
// Si no es múltiplo de ninguno de los dos, simplemente imprimimos el número actual.
} else {
    console.log(i);
        }
    }
}
// 6. INVOCACIÓN
// Ejecutamos la función pasando 3 y 5 como argumentos.
// Esto hará que los múltiplos de 3 digan "Back", los de 5 "End", y los de 15 "Back End".
backEnd(3, 5);