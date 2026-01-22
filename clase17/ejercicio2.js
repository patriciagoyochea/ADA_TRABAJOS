//Ejercicio 2: Análisis y Modificación de Cadenas de Texto
//Pide al usuario que ingrese una oración. Luego, escribe la función “procesarOracion” que haga lo siguiente:
//1. Quite los espacios en blanco al principio y al final.
//2. Divida la oración en palabras.
//3. Reemplace todas las vocales 'a' por '@'. Tener en cuenta utilizar “/a/g” que indica
//que se debe buscar todas las apariciones del carácter 'a' en la cadena (la bandera g
//es para global, lo que significa que reemplazará todas las apariciones, no solo la
//primera).
//4. Encuentre la posición de la primera aparición de la palabra "javascript". De no
//aparecer retornar -1
//5. Convierta la oración a una cadena de palabras separadas por guiones.
const prompt = require('prompt-sync')();
let oracion = prompt("Ingrese una oración: ");  
function procesarOracion(oracion) { 
    let oracionLimpia = oracion.trim();
    let palabras = oracionLimpia.split(" ");
    //Usamos .replace() con una Expresión Regular (/a/g) para cambiar TODAS las 'a' por '@'.
    // IMPORTANTE: Si usáramos solo "a" (comillas), JS solo cambiaría la primera que encuentre. La 'g' significa "global"
    let oracionModificada = oracionLimpia.replace(/a/g, '@');
    let posicionJavascript = oracionLimpia.indexOf("javascript");
    let oracionConGuiones = palabras.join("-");
    console.log("Oración modificada:", oracionModificada);
    console.log("Posición de 'javascript':", posicionJavascript);
    console.log("Oración con guiones:", oracionConGuiones);
}
//INVOCACIÓN
// Llamamos a la función para que se ejecute, pasándole la oración original que ingresó el usuario.
procesarOracion(oracion);