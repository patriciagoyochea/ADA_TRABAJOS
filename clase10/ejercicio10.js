const prompt = require("prompt-sync")();
let precioOriginal = parseFloat(prompt("Ingresa el precio original del producto: "));
let descuento = parseFloat(prompt("Ingresa el porcentaje de descuento (sin el símbolo %): "));
let precioFinal = precioOriginal * (descuento/100)