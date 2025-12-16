const prompt = require('prompt-sync')();
// 1. LA REGLA DE ORO (CONSTANTE)
// Definimos la contraseña correcta. La ponemos en mayúsculas porque es una constante (no va a cambiar).
const CONTRASENA_CORRECTA = "1234";

// 2. VARIABLE VACÍA
// Declaramos la variable donde vamos a guardar lo que escriba la usuaria.
// ¡Ojo acá! No hace falta ponerle un valor inicial (como 0 o "") porque el 'do-while'
// nos asegura que SÍ o SÍ le vamos a dar un valor antes de comparar.
let passwordUsuario; 

// 3. ESTRUCTURA DO...WHILE (HACER... MIENTRAS)
// A diferencia del 'while' común que pregunta antes de entrar, 
// el 'do' dice: "Primero hacé, y después preguntamos".
do {
    // 4. ACCIÓN (PRIMERO DISPARAMOS)
    // Le pedimos la contraseña. Esto se ejecuta seguro al menos una vez.
    passwordUsuario = prompt("Por favor, ingresá la contraseña: ");

    // 5. FEEDBACK (AVISO DE ERROR)
    // Si lo que escribió es DISTINTO a la clave correcta, le avisamos.
    if (passwordUsuario !== CONTRASENA_CORRECTA) {
        console.log("Contraseña incorrecta, probá de nuevo.");
    }
    // 6. LA CONDICIÓN (EL PATOVICA)
    // Recién acá abajo preguntamos: "¿La contraseña es distinta a la correcta?".
    // Si es distinta (TRUE), te manda de vuelta arriba al 'do'.
    // Si es igual (FALSE), te deja pasar y sigue el código hacia abajo.
} while (passwordUsuario !== CONTRASENA_CORRECTA);

// 7. ÉXITO
// Si llegamos acá es porque el bucle se rompió (o sea, puso la clave bien).
console.log("¡Acceso concedido! Bienvenida.");