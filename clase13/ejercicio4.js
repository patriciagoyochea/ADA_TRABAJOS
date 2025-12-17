//FUNCION DECLARADA
//CONCEPTO: Una función declarada es una FUNCION seguida del nombre de la función, paréntesis y llaves.
// Estas funciones son "hoisted", lo que significa que pueden ser llamadas antes de su declaración en el código.
function esPar(numero) {
    if (numero % 2 === 0) {
       return "Es par";
    }   else {
        return "Es impar";
    }   
}
//LLAMADA A LA FUNCION
console.log(esPar(4)); // Salida: Es par
console.log(esPar(7)); // Salida: Es impar