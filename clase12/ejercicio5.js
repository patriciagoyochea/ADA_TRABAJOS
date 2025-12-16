//Crea un programa que solicite al usuario ingresar 5 nombres y los almacene en
//un array. Luego, solicita al usuario ingresar un nombre y verifica si ese nombre se
//encuentra en el array. (Pueden desglosar en pasos el código si eso les facilita su
//desarrollo
const prompt= require('prompt-sync')();

let nombres = [];

// Usamos un for que da 5 vueltas para llenar la lista.
for (let i = 0; i < 5; i++) {
    // Pedimos el nombre y... ¡Truco importante!
    // Le agregamos .toLowerCase() al final. 
    // Esto hace que si escriben "Mariana", "MARIANA" o "MaRiAnA", se guarde siempre como "mariana".
    // Esto es vital para que después el buscador no falle por una mayúscula.
    nombres[i] = prompt("Nombre " + (i + 1) + ": ").toLowerCase(); 
}
// Paso 2: PEDIR EL DATO A BUSCAR
// Le preguntamos a la usuaria qué quiere buscar.
// También lo pasamos a minúsculas para que coincida con lo que guardamos antes.
let nombreBuscado = prompt("¿Qué nombre querés buscar?: ").toLowerCase();

// 3. LA BANDERA (FLAG)
// Esta variable es nuestro "testigo". Empieza en 'false' (falso) porque, al arrancar,
// todavía no encontramos nada. Si lo encontramos más abajo, la vamos a cambiar a 'true'.
let encontrado = false; 

// Paso 3: EL MOTOR DE BÚSQUEDA
// Recorremos la lista completa, desde el principio (0) hasta el final (.length).
for (let i = 0; i < nombres.length; i++) {
    
    // Preguntamos en cada posición: "¿El nombre que está acá (nombres[i]) es igual al que busco?".
    if (nombres[i] === nombreBuscado) {
        
        // ¡EUREKA! Lo encontramos.
        encontrado = true; // Levantamos la bandera (avisamos que está).
        
        // IMPORTANTE: BREAK
        // Como ya lo encontramos, no tiene sentido seguir revisando el resto de la lista.
        // Cortamos el ciclo acá mismo para ahorrar trabajo.
        break; 
    }
}

// 4. RESULTADO FINAL
// Ahora miramos cómo quedó la bandera.
if (encontrado) { // Esto es lo mismo que decir "if (encontrado === true)"
    console.log("¡Sí! El nombre " + nombreBuscado + " está en la lista.");
} else {
    // Si la bandera sigue en 'false', significa que recorrimos todo y nunca apareció.
    console.log("No, che. El nombre " + nombreBuscado + " no se encuentra.");
}