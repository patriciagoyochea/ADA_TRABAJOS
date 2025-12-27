//Solicita al usuario la cantidad de productos comprados y el precio unitario. 
//Usa una función flecha para calcular el total con descuento según la cantidad.
const prompt = require('prompt-sync')();

//DEFINICIÓN DE ARROW FUNCTION
//Declaramos la función flecha en una constante.
// Recibe dos parámetros: 'cantidad' y 'precio'.
// Usamos llaves { } porque la lógica ocupa más de una línea, por lo que el return debe ser explícito.
const calcularTotalConDescuento = (cantidad, precio) => {
    //CÁLCULO BASE
    //Primero calculamos el total sin descuento y lo guardamos en una variable local.
    let total = cantidad * precio;
    if (cantidad > 5) {
        //Si es verdadero, aplicamos un 10% de descuento.
        //Multiplicar por 0.90 es equivalente a restar el 10%.
        return total * 0.90;
    }
    //Si la condición del if no se cumplió (compró 5 o menos), 
    //devolvemos el total original sin modificaciones.
    return total;
}
let cantidadProductos = parseInt(prompt("Cantidad comprada: "));
let precioUnitario = parseFloat(prompt("Precio unitario: "));
console.log("Total a pagar: " + calcularTotalConDescuento(cantidadProductos, precioUnitario));