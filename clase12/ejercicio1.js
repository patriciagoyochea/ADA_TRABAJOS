const prompt = require('prompt-sync')();

// 1. ACUMULADOR
// Arrancamos la variable "suma" en 0. Es como una alcancía vacía donde vamos a ir guardando todo.
let suma = 0;

// 2. VARIABLE DE CONTROL (El truquito)
// Inicializamos esta variable en 0 (o cualquier positivo) solamente para que el While nos deje pasar la primera vez.
// Si no le damos un valor inicial, la condición de abajo daría error o falso de entrada.
let numeroIngresado = 0; 

console.log("--- Sumadora de Números ---");
// Acá cambiamos el texto para que te quede bien argento: "Ingresá"
console.log("Ingresá números positivos para sumar. Ingresá un negativo para terminar.");

// 3. EL BUCLE (EL PORTERO)
// La condición es: "Che, mientras el número que tenés en la mano sea mayor o igual a 0, seguí dando vueltas".
while (numeroIngresado >= 0) {
    
    // 4. PEDIDO DE DATOS
    // Le pedimos al usuario: "Ingresá un número". 
    // Usamos parseFloat por si quiere sumar decimales (ej: 10.50).
    numeroIngresado = parseFloat(prompt("Ingresá un número: "));

    // 5. EL FILTRO DE SEGURIDAD
    // Esto es fundamental. Imaginate que el usuario pone "-5" para salir.
    // El while ya lo dejó entrar a esta vuelta, así que tenemos que frenarlo antes de sumar.
    // Le decimos: "Solo metelo en la bolsa si es positivo".
    if (numeroIngresado >= 0) {
        
        // 6. ACUMULANDO
        // Esto se lee: "A lo que ya tenía en la variable 'suma', agregale el nuevo número y guardalo de nuevo".
        suma = suma + numeroIngresado; 
    }
}

// 7. RESULTADO FINAL
// Cuando el usuario pone un negativo, el while se rompe, salimos y mostramos esto.
console.log("La suma total de los números ingresados es: " + suma);