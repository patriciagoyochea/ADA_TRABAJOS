//Crea un programa que le pida al usuario dos números y una operación matemática a
//realizar: suma, resta, multiplicación o división. Según la operación ingresada, el programa
//deberá calcular y mostrar el resultado. Si el usuario ingresa una operación inválida, el
//programa debe mostrar un mensaje de error. Usa switch para resolverlo.
let numeroUno = parseFloat(prompt("Ingrese el primer número: "));
let numeroDos = parseFloat(prompt("Ingrese el segundo número: "));
 
//pedimos la operación al usuario y utilizamos toLowerCase para evitar errores por mayúsculas/minúsculas
//esto ayuda a que el usuario pueda ingresar "Suma", "suma", "SUMA", etc., y todas sean interpretadas correctamente
//como "suma".
let operacion = prompt("Ingrese la operación a realizar (suma, resta, multiplicacion, division): ").toLowerCase();

//Variable vacia
//creamos una variable vacía para almacenar el resultado de la operación
//es como dejar una caja vacía para llenarla después.
//usamos let porque el valor va a cambiar dependiendo de la operación que elija el usuario.
let resultado;

//ESTRUCTURA switch(EL CEREBRO DE LA CALCULADORA)
switch (operacion) {
    case "suma":
        resultado = numeroUno + numeroDos;  
        console.log("El resultado de la suma es: " + resultado);
        break;
    case "resta":
        resultado = numeroUno - numeroDos;  
        console.log("El resultado de la resta es: " + resultado);
        break;
    case "multiplicacion":
        resultado = numeroUno * numeroDos;  
        console.log("El resultado de la multiplicación es: " + resultado);
        break;
    case "division":
        //verificamos que el segundo número no sea cero para evitar división por cero
        if (numeroDos !== 0) {  
            resultado = numeroUno / numeroDos;  
            console.log("El resultado de la división es: " + resultado);
        } else {
            console.log("Error: No se puede dividir por cero.");
        }
        break;
    default:
        //si la operación no coincide con ninguna de las opciones válidas, mostramos un mensaje de error
        console.log("Error: Operación inválida. Por favor ingrese suma, resta, multiplicacion o division.");
        break;
}