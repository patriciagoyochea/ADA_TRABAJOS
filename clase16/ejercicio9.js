//Cuenta la cantidad total de letras en una lista de palabras
//Imagina que tienes una lista de palabras ['sol', 'luna', 'estrella']. Queremos saber cuántas
//letras hay en total entre todas las palabras. Por ejemplo, 'sol' tiene 3 letras, 'luna' tiene 4, y
//'estrella' tiene 8. La suma total debería ser 15.
let palabras = ['sol', 'luna', 'estrella'];
let totalLetras = 0;
for (let i = 0; i < palabras.length; i++) {
    totalLetras += palabras[i].length;
}
console.log("Cantidad total de letras:", totalLetras);
//Salida esperada: Cantidad total de letras: 15
