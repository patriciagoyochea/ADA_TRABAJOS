//Solicita al usuario el precio de un producto y el porcentaje de IVA.
//  Usa una función flecha para calcular el precio final.
const prompt = require('prompt-sync')();
const precioProducto = parseFloat(prompt("Ingrese el precio del producto: "));
const porcentajeIVA = parseFloat(prompt("Ingrese el porcentaje de IVA (por ejemplo, 21 para 21%): "));
const precioFinal = (precio, iva) => precio + (precio * iva / 100);
console.log("El precio final del producto con IVA es: " + precioFinal(precioProducto, porcentajeIVA));