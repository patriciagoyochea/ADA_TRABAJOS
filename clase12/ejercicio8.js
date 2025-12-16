//ejercicio 8 - ROJO Y VERDE
//Para este ejercicio vamos a generar dos funciones:
//a) Una va a sumar los valores en la diagonal marcada en rojo.
//b) La otra va a marcar los valores de la diagonal marcada en verde.
//Ambas funciones deben devolver un resultado único. Rojo: 505
//VERDE 505
//IMPORTANTE: Para hacer este ejercicio, tendrán que investigar sobre el método
//“push” en los Arrays. ¡Este método lo veremos en las próximas clases, pero si
//desean pueden investigarlo para resolver este desafío!
// 1. ARMADO DE LA MATRIZ (PREPARACIÓN)
// Primero, necesitamos crear la "hoja cuadriculada" de 10x10 y llenarla con números del 1 al 100.
let matriz = [];
let contador = 1; // Este es el número que vamos a ir escribiendo en los casilleros (1, 2, 3...).

// Primer bucle: Se encarga de construir las 10 FILAS (renglones).
for (let i = 0; i < 10; i++) {
    
    // Antes de llenar, creamos la fila vacía. Es como agarrar un renglón en blanco.
    let fila = []; 
    
    // Segundo bucle: Se encarga de llenar las 10 COLUMNAS de esa fila.
    for (let j = 0; j < 10; j++) {
        
        // ACÁ USAMOS PUSH (EMPUJAR/AGREGAR)
        // El ejercicio pedía investigar esto. .push() agarra el valor y lo mete al final de la lista.
        // Metemos el 1, después el 2, etc.
        fila.push(contador); 
        
        // Aumentamos el contador para que el próximo número sea el siguiente.
        contador++;
    }
    
    // Cuando terminamos de llenar la fila completa (del 1 al 10),
    // agarramos esa fila entera y la "pusheamos" adentro de la matriz principal.
    matriz.push(fila); 
}

// 2. FUNCIÓN DIAGONAL ROJA (LA PRINCIPAL \)
// Esta es la diagonal que va desde la punta Arriba-Izquierda hasta Abajo-Derecha.
// Si miramos las coordenadas en un dibujo, son: [0,0], [1,1], [2,2], [3,3]...
// ¡La regla es fácil! El número de fila (i) es IGUAL al número de columna (j).

function sumarRojo(matriz) {
    let suma = 0; // Preparamos la alcancía.

    // Recorremos toda la matriz...
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            
            // PREGUNTA CLAVE: ¿Estoy en la diagonal principal?
            // Si la fila 'i' es igual a la columna 'j', entonces SÍ es parte de la línea roja.
            if (i === j) {
                suma += matriz[i][j]; // Lo sumamos.
            }
        }
    }
    return suma; // Devolvemos el total calculado.
}

// 3. FUNCIÓN DIAGONAL VERDE (LA SECUNDARIA /)
// Esta es la difícil. Va desde Arriba-Derecha hasta Abajo-Izquierda.
// Miren las coordenadas: [0,9], [1,8], [2,7]...
// ¿Notan el patrón? Si sumamos fila + columna siempre da lo mismo:
// 0+9 = 9
// 1+8 = 9
// 2+7 = 9
// Ese "9" es el tamaño de la matriz (10) menos 1.

function sumarVerde(matriz) {
    let suma = 0;

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            
            // PREGUNTA CLAVE: ¿Estoy en la diagonal secundaria?
            // La fórmula mágica es: i + j tiene que ser igual al último índice (9).
            // matriz.length vale 10, si le restamos 1, nos da 9.
            if (i + j === matriz.length - 1) {
                suma += matriz[i][j]; // Lo sumamos.
            }
        }
    }
    return suma;
}

// 4. RESULTADOS
// Llamamos a las funciones y mostramos lo que nos devuelven.
console.log("Suma Diagonal Roja: " + sumarRojo(matriz));   // Debería dar 505
console.log("Suma Diagonal Verde: " + sumarVerde(matriz)); // Debería dar 505