//Ejercicio 4: Transformación y Análisis de Cadenas
//Pide al usuario que ingrese una lista de nombres separados por comas. Los nombres a
//ingresar deben ser “Julian”, “Maria”, “Malena”, “Andrea”, “Pablo” y “Pedro”.
//Luego, escribe la función “transformarYAnalizarNombres”que realice las siguientes tareas:
//1. Quite los espacios en blanco alrededor de cada nombre.
//2. Verifique si existe el nombre "Juan".
//3. Reemplace todos los nombres "María" por "Ana".
//4. Encuentre el índice del nombre "Pedro".
//5. Devuelva una cadena de nombres en orden alfabético separados por puntos.
const prompt = require('prompt-sync')();

let entrada = prompt("Ingresá los nombres separados por comas: ");
function transformarYAnalizarNombres(entrada) { 
    let nombres = entrada.split(",")
    let nombresLimpios = nombres.map(nombre => nombre.trim())
    let existeJuan = nombresLimpios.includes("Juan") 
    let nombresModificados = nombresLimpios.map(nombre => {
        if (nombre === "María") {
            return "Ana"    
        } else {
            return nombre
        }   
})
    let indicePedro = nombresModificados.indexOf("Pedro")
    let nombresOrdenados = nombresModificados.sort().join(".")
    console.log("¿Existe Juan?:", existeJuan)
    console.log("Índice de Pedro:", indicePedro)
    console.log("Nombres finales:", nombresOrdenados)
}
transformarYAnalizarNombres(entrada)