const prompt = require('prompt-sync')();
// 1. INPUT (ENTRADA DE DATOS)
// Le pedimos a la usuaria hasta qué número quiere revisar.
// "Ingresá" con tilde, bien nuestro.
// Usamos parseInt porque necesitamos un número entero para contar.
let numeroX = parseInt(prompt("Ingresá un número límite (X): "));

// 2. EL CONTADOR (EL ANOTADOR)
// Creamos una variable que arranca en 0. 
// Imaginate que es un anotador vacío donde vamos a ir marcando "un poroto" cada vez que encontremos un impar.
let contadorImpares = 0; 

// 3. EL CICLO FOR (EL RECORRIDO)
// Vamos a revisar número por número, arrancando desde el 0.
// La condición 'i <= numeroX' significa que incluimos al número que eligió la usuaria.
// (Si eligió 10, revisamos también el 10).
for (let i = 0; i <= numeroX; i++) {  
      // 4. LA PREGUNTA (EL FILTRO)
    // Acá usamos el operador Módulo (%).
    // Preguntamos: "¿Si divido el número actual (i) por 2, el resto es DISTINTO (!==) de cero?".
    // Si el resto NO es cero, significa que no es par. O sea, es impar.
    if (i % 2 !== 0) {
        
        // 5. SUMAMOS EL POROTO
        // Si la condición se cumplió, entramos acá.
        // 'contadorImpares++' es lo mismo que decir "sumale 1 a lo que ya tenías".
        // ¡Ojo! No sumamos el número 'i', solo contamos "uno más" a la colección.
        contadorImpares++; 
    }
}

// 6. RESULTADO FINAL
// Cuando termina el for, mostramos cuántos "porotos" juntamos en total.
console.log("La cantidad de números impares desde 0 hasta " + numeroX + " es: " + contadorImpares); 