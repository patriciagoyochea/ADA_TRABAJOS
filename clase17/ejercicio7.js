//Escribe una función "gestionarFloreria"  que realice las siguientes tareas con una lista
//predefinida de nombres de flores: let entrada = ["rosa", "tulipan", "orquidea, "lirio"]
//1. Quite los espacios en blanco alrededor de cada flor.
//2. Verifique si existe la flor "Margarita" y, si está presente, agregue "Azucena" al final de la lista.
//3. Reemplace todas las flores "Orquídea" por "Clavel".
//4. Encuentre el índice de la flor "Girasol" y, si no está presente, agregue "Girasol" al iniciode la lista.
//Devuelva una cadena de flores en orden alfabético separadas por puntos.
let entrada = "Rosa, Tulipán, Orquídea, Lirio"; 
function gestionarFloreria(entrada){
    let flores = entrada.split(",")
    let floresLimpias = flores.map(flor => flor.trim())
    if (floresLimpias.includes("Margarita")) {
        floresLimpias.push("azucena")
    }
    let floresReemplazadas = floresLimpias.map(flor => {
        if (flor === "Orquídea") {
            return "Clavel"
        } else {
            return flor
        }
    })
    let indiceGirasol = floresReemplazadas.indexOf("Girasol")
    
    if (indiceGirasol === -1) {
        floresReemplazadas.unshift("Girasol")
    }

    // (SORT + JOIN)
    // Ordenamos alfabéticamente (Clavel, Girasol, Lirio, Rosa, Tulipán).
    // Unimos todo en una string separada por puntos.
    let floresOrdenadas = floresReemplazadas.sort().join(".")

    console.log("Flores finales:", floresOrdenadas)
}
gestionarFloreria(entrada)
