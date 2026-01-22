//Manipulación de Arrays y Cadenas.A partir del siguiente array de frases, escribe la función “procesarFrases” que realice las
//siguientes tareas:1. Convierta cada frase a minúsculas. Investigar el método “.toLowerCase()” para este
//punto
//2. Divida cada frase en palabras.
//3. Reemplace las palabras "malo" por "bueno".
//4. Combine las palabras de cada frase en una nueva cadena separada por espacios.
//5. Devuelva un nuevo array con las frases modificadas.
let frases = [
    "El sol es dorado",
    "Me gustan los libros de jane austen",
    "Debo terminar las actividades,"
]

function procesarFrases(frases) {
    let frasesModificadas = frases.map(frase => {
        let fraseMinuscula = frase.toLowerCase()
        let palabras = fraseMinuscula.split(" ")

        let palabrasNuevas = palabras.map(palabra => {
            if (palabra === "malo") {
                return "bueno"
            } else {
                return palabra
            }
        })

        return palabrasNuevas.join(" ")
    })

    return frasesModificadas
}

console.log(procesarFrases(frases))

