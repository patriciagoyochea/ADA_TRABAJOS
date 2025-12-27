//Solicita al usuario ingresar la marca de un auto y utiliza una función flecha para verificar y mostrar si
//el auto es de origen nacional o importado. 
//Considera que solo los autos de marcas "Chevrolet", "Ford" y "Fiat" son de origen nacional

const prompt = require("prompt-sync")();
// 2. DEFINICIÓN DE ARROW FUNCTION
// Declaramos la función flecha 'verificarMarca' que recibe un parámetro: 'marca'.
// Usamos llaves { } porque necesitamos realizar un procesamiento previo antes de comparar.
const verificarMarca = marca => {  
//// 3. NORMALIZACIÓN DE TEXTO (TOLOWERCASE)
let marcaNormalizada = marca.toLowerCase();

if (marcaNormalizada === "Chevrolet" || marcaNormalizada === "ford" 
    || marcaNormalizada === "fiat"){
        return "El auto es de origen nacional"
    }
    return "El auto es importado";
};
//retorno por defecto
// Si no entró en el if anterior (no es ninguna de las 3 marcas), 
// la función sigue y devuelve "Importado" por descarte.

let marcaAuto = prompt("Ingresa la marca del auto:");
console.log (verificarMarca(marcaAuto));