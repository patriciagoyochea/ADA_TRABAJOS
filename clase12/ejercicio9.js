const prompt = require('prompt-sync')();

// 1. LA MATRIZ DE GASTOS (LA PLANILLA)
// Copiamos los datos tal cual. Imaginen que esto es un Excel.
// Filas (horizontales) = Semanas.
// Columnas (verticales) = Días (Lunes, Martes, etc.).
let gastos = [
    [1135, 2500, 900, 1600, 2800, 650, 1100], // Semana 1 (Fila 0)
    [1750, 1890, 1900, 1300, 898, 1750, 2800], // Semana 2 (Fila 1)
    [1700, 1150, 1690, 1900, 1770, 500, 2560], // Semana 3 (Fila 2)
    [800, 1250, 1430, 2100, 1980, 1270, 950]   // Semana 4 (Fila 3)
];

// --- A) TOTAL DE UNA SEMANA (SUMAR UNA FILA) ---
console.log("--- Consultar Gastos por Semana ---");

// 2. EL INPUT CON "TRUQUITO" (-1)
// Le pedimos a la usuaria el número de semana (1 a 4).
// PERO, como los programadores contamos desde el 0, le restamos 1.
// Si ella pone "Semana 1", nosotros buscamos en la Fila 0.
let semanaConsultada = parseInt(prompt("Elegí Nro de Semana para ver gastos (1-4): ")) - 1;

let totalSemana = 0; // El acumulador para esta suma.

// 3. RECORRIDO HORIZONTAL
// Ya sabemos en qué fila estamos (semanaConsultada). Ahora tenemos que recorrer sus 7 columnas (días).
// Usamos 'j' para movernos de izquierda a derecha.
for (let j = 0; j < 7; j++) {
    // Sumamos lo que hay en la fila fija y la columna variable.
    totalSemana += gastos[semanaConsultada][j];
}
// Al mostrarlo, le sumamos 1 de nuevo a la semana para que la usuaria vea "Semana 1" y no "Semana 0".
console.log("El total de gastos de la Semana " + (semanaConsultada + 1) + " es: $" + totalSemana);


// --- B) TOTAL DE UN DÍA (SUMAR UNA COLUMNA) ---
console.log("--- Consultar Gastos por Día ---");

// 4. OTRO INPUT CON TRUQUITO
// Pedimos el día (1 al 7). Le restamos 1 para obtener el índice de columna (0 al 6).
let diaConsultado = parseInt(prompt("Elegí Nro de Día para ver gastos (1-7): ")) - 1;

let totalDia = 0;

// 5. RECORRIDO VERTICAL (EL DIFÍCIL)
// Acá la lógica cambia. Queremos dejar fija la columna (el día) y bajar por las semanas.
// Usamos un for que recorra las 4 FILAS (i).
for (let i = 0; i < 4; i++) {
    // Sumamos lo que hay en la fila variable 'i', pero en la columna fija 'diaConsultado'.
    // Es como sumar verticalmente en el Excel.
    totalDia += gastos[i][diaConsultado];
}
console.log("El total de gastos del Día " + (diaConsultado + 1) + " es: $" + totalDia);


// --- C) TOTAL DEL MES (SUMAR TODO) ---
console.log("--- Gasto Total del Mes ---");

let totalMes = 0;

// 6. RECORRIDO COMPLETO (DOBLE FOR)
// Acá no hay misterio, hay que visitar todos los casilleros.
// El primer for baja por las semanas (filas).
for (let i = 0; i < gastos.length; i++) { 
    // El segundo for recorre los días (columnas).
    for (let j = 0; j < gastos[i].length; j++) { 
        totalMes += gastos[i][j]; // Sumamos todo a la bolsa grande.
    }
}
console.log("El gasto total del mes fue: $" + totalMes);


// --- D) BUSCAR EL MÁXIMO (SEMAMA MÁS GASTADORA) ---
console.log("--- Estadísticas: Récords de Gastos ---");

// 7. EL REY DE LA COLINA (ALGORITMO DE MÁXIMO)
// Necesitamos dos variables:
// 1. maxGastoSemana: Para guardar el monto récord (arranca en 0).
// 2. semanaMasGastadora: Para acordarnos CUÁL fue la semana del récord.
let maxGastoSemana = 0;
let semanaMasGastadora = 0;

// Vamos a revisar semana por semana.
for (let i = 0; i < gastos.length; i++) {
    
    // Paso 1: Sumamos la semana actual completa (como hicimos en el punto A).
    let sumaFilaActual = 0;
    for (let j = 0; j < 7; j++) {
        sumaFilaActual += gastos[i][j];
    }
    
    // Paso 2: LA COMPARACIÓN (EL DESAFÍO)
    // Preguntamos: "¿Esta semana gastó más que el récord que tenía guardado hasta ahora?".
    if (sumaFilaActual > maxGastoSemana) {
        // Si es sí, tenemos un nuevo campeón.
        maxGastoSemana = sumaFilaActual; // Guardamos el nuevo monto récord.
        semanaMasGastadora = i + 1;      // Guardamos el número de semana (para humanos).
    }
}
console.log("La semana con más gastos fue la Semana " + semanaMasGastadora + " con $" + maxGastoSemana);


// --- D (Parte 2) DÍA MÁS GASTADOR ---

let maxGastoDia = 0;
let diaMasGastador = 0;

// 8. EL MISMO ALGORITMO PERO VERTICAL
// ¡OJO ACÁ! Invertimos los bucles.
// Primero recorremos las COLUMNAS (j) porque queremos comparar día contra día.
for (let j = 0; j < 7; j++) { 
    
    let sumaColumnaActual = 0;
    
    // Para cada día, sumamos sus 4 semanas (recorrido vertical).
    for (let i = 0; i < 4; i++) { 
        sumaColumnaActual += gastos[i][j];
    }

    // Comparamos si este día le ganó al récord anterior.
    if (sumaColumnaActual > maxGastoDia) {
        maxGastoDia = sumaColumnaActual;
        diaMasGastador = j + 1; // Guardamos el número de día.
    }
}
console.log("El día con más gastos globales fue el Día " + diaMasGastador + " con $" + maxGastoDia);