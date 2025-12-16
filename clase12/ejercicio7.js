// 1. DEFINICIÓN DE LA MATRIZ (LA GRILLA)
// Creamos una variable que adentro tiene 5 arrays (filas).
// Cada uno de esos arrays tiene 5 números (columnas).
// Es literal una tabla de 5x5 llena de números positivos.
let matrizNumeros = [
    [1, 2, 3, 4, 5], // Fila 0 (i=0)
    [1, 2, 3, 4, 5], // Fila 1 (i=1)
    [1, 2, 3, 4, 5], // Fila 2 (i=2)
    [1, 2, 3, 4, 5], // Fila 3 (i=3)
    [1, 2, 3, 4, 5]  // Fila 4 (i=4)
];

// 2. EL ACUMULADOR
// Preparamos la variable "sumaTotal". Arranca en 0 porque vamos a ir sumando todo ahí.
// Es nuestra "bolsa" donde vamos a meter todos los números que encontremos.
let sumaTotal = 0;

// 3. RECORRIDO TOTAL (DOBLE FOR)
// Necesitamos pasar por TODOS los casilleros.

// PRIMER FOR (LAS FILAS - i):
// Este bucle se encarga de bajar renglón por renglón.
// Va desde la fila 0 hasta la última (matrizNumeros.length).
for (let i = 0; i < matrizNumeros.length; i++) {
    
    // SEGUNDO FOR (LAS COLUMNAS - j):
    // Una vez que estamos parados en una fila (i), tenemos que recorrerla de izquierda a derecha.
    // Este bucle va desde la columna 0 hasta el final de ESA fila en particular.
    for (let j = 0; j < matrizNumeros[i].length; j++) {
        
        // 4. LA SUMA
        // Acá ocurre la magia.
        // matrizNumeros[i][j] significa: "Dame el valor que está en la Fila 'i' y Columna 'j'".
        // El operador '+=' lo suma a lo que ya teníamos en 'sumaTotal'.
        sumaTotal += matrizNumeros[i][j];
    }
    // Cuando terminamos de recorrer las columnas de una fila, el bucle 'j' termina,
    // y el bucle 'i' nos baja a la siguiente fila.
}

// 5. MOSTRAR RESULTADO
// Cuando terminamos de recorrer toda la grilla (las 5 filas), mostramos el total.
console.log("La suma de todos los elementos de la matriz 5x5 es: " + sumaTotal);