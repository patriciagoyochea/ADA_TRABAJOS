const PromptSync = require("prompt-sync")();
let floresFavoritas =[];
// 3. ASIGNACIÓN MANUAL (ACCESO POR ÍNDICE)
// Pedimos los datos y los guardamos DIRECTAMENTE en posiciones específicas del array.
// Al usar floresFavoritas[0], estamos accediendo a la primera "caja" de la lista.
// Esto cumple con la consigna de NO usar métodos automáticos como .push()[cite: 64].
floresFavoritas[0] = prompt("Ingresa tu flor favorita 1: "); // Posición 0
floresFavoritas[1] = prompt("Ingresa tu flor favorita 2: "); // Posición 1
floresFavoritas[2] = prompt("Ingresa tu flor favorita 3: "); // Posición 2

// 4. DATOS DE BÚSQUEDA
// Pedimos al usuario el valor específico que queremos buscar dentro de la lista[cite: 65].
let florBusqueda = prompt("Ingresa una flor para buscar: ");

let contador= 0;

// 6. RECORRIDO DE ARRAY (BUCLE FOR)
// Iniciamos un ciclo que va desde el índice 0 hasta el final del array (floresFavoritas.length).
for (let i = 0; i < floresFavoritas.length; i++) {
    
    // 7. COMPARACIÓN
    // En cada vuelta, verificamos si el elemento guardado en la posición actual (floresFavoritas[i])
    // es IDÉNTICO (===) a la flor que estamos buscando.
    if (floresFavoritas[i] === florBusqueda) {
        
        // 8. INCREMENTO
        // Si encontramos una coincidencia, aumentamos el contador en 1.
        // contador++ es lo mismo que decir contador = contador + 1.
        contador++;
    }
}


console.log("La flor " + florBusqueda + " aparece " + contador + " veces.");