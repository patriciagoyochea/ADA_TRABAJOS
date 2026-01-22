//Escribe una función "gestionarAutos" que realice las siguientes tareas con una lista predefinida de marcas de autos:
//1. Quite los espacios en blanco alrededor de cada marca.
//2. Verifique si existe la marca "Tesla".
//3. Reemplace todas las marcas "Ford" por "BMW".
//4. Encuentre el índice de la marca "Chevrolet".
//5. Devuelva una cadena de marcas en orden alfabético separadas por puntos. Utilizar “.sort()”
let entrada = "Toyota, Honda, Ford, Chevrolet, Nissan";
function gestionarAutos(entrada) {
    let autos = entrada.split(",")
    let autosLimpios = autos.map(auto => auto.trim())
    let existeTesla = autosLimpios.includes("Tesla")
    let autosReemplazados = autosLimpios.map(auto => {
        if (auto === "Ford") {
            return "BMW"
        } else {
            return auto
        }
    })
let indiceChevrolet = autosReemplazados.indexOf("Chevrolet")
let autosOrdenados = autosReemplazados.sort().join(".")

    console.log("¿Existe Tesla?:", existeTesla)
    console.log("Índice de Chevrolet:", indiceChevrolet)
    console.log("Autos finales:", autosOrdenados)
}
gestionarAutos(entrada)
