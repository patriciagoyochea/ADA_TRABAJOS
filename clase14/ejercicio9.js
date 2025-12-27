//En este ejercicio, trabajaremos con una lista de modelos de autos. Implementa una función llamada 
//ultimaAparicionModeloAuto(modelo) que encuentre y muestre la última posición en 
//la lista donde aparece el modelo específico de auto dado por modelo.
//1. DEFINICIÓN DEL ARRAY (DATOS)
// Creamos una lista de modelos. Notar que "Ford" aparece varias veces.
// Esto es necesario para probar si el algoritmo encuentra realmente la ÚLTIMA aparición.
let modelosAutos = ["Fiat", "Ford", "Chevrolet", "Ford", "Toyota", "Ford", "Audi"];
function ultimaAparicionModeloAuto(modelo) {
   let posicion = -1;
   for (let i = 0; i < modelosAutos.length; i++) {    
         // Verificamos si el elemento actual coincide con el modelo buscado.
         if (modelosAutos [i] === modelo) {
        // 6. ACTUALIZACIÓN DE POSICIÓN (SOBREESCRITURA)
        // ¡Esta es la clave del ejercicio!
        // Guardamos la posición actual (i + 1 para que sea legible por humanos, 1 a N).
        // NO detenemos el bucle (no usamos break). Si aparece otro "Ford" más adelante,
        // esta variable se SOBREESCRIBE con el nuevo valor más alto.
        // Al terminar el bucle, nos quedará guardada la última posición registrada.
            posicion = i + 1;
        }
}

// 7. VERIFICACIÓN FINAL
    // Evaluamos si la variable 'posicion' cambió su valor inicial.
    if (posicion !== -1) {
        // Si es distinto de -1, significa que lo encontramos y mostramos el valor final.
        console.log("El modelo " + modelo + " está en la posición: " + posicion);
    } else {
        // Si sigue siendo -1, nunca entró en el if del bucle, por lo tanto no existe.
        console.log("El modelo no está presente");
}
}
ultimaAparicionModeloAuto("Ford");
