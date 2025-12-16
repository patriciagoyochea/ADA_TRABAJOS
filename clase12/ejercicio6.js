// 1. DEFINICIÓN DE LA MATRIZ (TABLA DE DATOS)
// Copiamos tal cual los datos que nos pasaron.
// Imaginensé que esto es una planilla de Excel:
// Tiene 4 filas (horizontales) y cada fila tiene varios números (columnas).
let matriz = [
    [10, 3, 2, 1, 4, 7],       // Fila 0
    [5, 5, 10, 100, 4],        // Fila 1
    [5, 125, 10, 1020, 4],     // Fila 2
    [5, 5, 5097, 100, 4]       // Fila 3
];

// 2. EL ACUMULADOR
// Preparamos la variable donde vamos a ir guardando la suma final.
// Arranca en 0 porque todavía no sumamos nada.
let sumaCondicional = 0;

// 3. RECORRIDO (EL DOBLE FOR)
// Para leer una matriz completa, necesitamos dos bucles:
// UNO para bajar renglón por renglón (Filas).
// OTRO para ir dato por dato dentro de ese renglón (Columnas).

// PRIMER FOR (EL ASCENSOR) -> Controla las FILAS (i)
// Empieza en la fila 0 y baja hasta la última fila que tenga la matriz (.length).
for (let i = 0; i < matriz.length; i++) {
    
    // SEGUNDO FOR (EL LECTOR) -> Controla las COLUMNAS (j)
    // Una vez que estamos parados en una fila (i), este for recorre los casilleros de esa fila.
    // Fíjense que usamos 'matriz[i].length': esto significa "el largo de ESTA fila en particular".
    for (let j = 0; j < matriz[i].length; j++) {
        
        // 4. CAPTURAR EL VALOR
        // Acá usamos las dos coordenadas:
        // [i] es la fila donde estoy parada.
        // [j] es la columna (el casillero) que estoy mirando ahora.
        let valorActual = matriz[i][j];

        // 5. LA CONDICIÓN (EL FILTRO)
        // El ejercicio pide sumar SOLO si cumple dos requisitos AL MISMO TIEMPO (&&):
        // 1. Ser mayor o igual a 10.
        // 2. Ser menor estricto a 1000.
        if (valorActual >= 10 && valorActual < 1000) {
            
            // 6. ACUMULAR
            // Si pasó el filtro, lo sumamos a nuestra bolsa total.
            sumaCondicional += valorActual; 
            
            // (Esta línea comentada sirve para "debuggear" o chusmear qué números está sumando).
            // console.log("Sumando: " + valorActual); 
        }
    }
    // Cuando termina el for de la 'j', pasamos a la siguiente fila (el for de la 'i' avanza).
}

// 7. RESULTADO FINAL
// Mostramos cuánto nos dio la suma de todos los que cumplieron la regla.
console.log("La suma de los valores >= 10 y < 1000 es: " + sumaCondicional);