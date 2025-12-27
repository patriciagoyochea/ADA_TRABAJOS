//Ejemplo 1:  FUNCION NORMAL
//Recibe un parámetro numérico y devuelve el valor de ese número multiplicado por 2
function multiplicarPorDos(num) {
    return num * 2;
}
console.log(multiplicarPorDos(5)); // llamada a la función normal.

//Ejemplo 2: FUNCION ARROW
//Tiene sintaxis más compacta pero hace lo mismo que la función normal anterior
const multiplicarPorDosArrow = (num) => {
    return num * 2;
}
console.log(multiplicarPorDosArrow(5)); // llamada a la función arrow.

//Ejemplo 3: FUNCION ARROW MÁS SIMPLE (SIN LLAVES Y CON RETURN IMPLÍCITO)
//Esta version usa una sintaxis aún más breve donde el return es implícito
//lo que significa que no es necesario escribir la palabra "return" ni usar llaves {}
//la función tiene una sola expresión.
const multiplicarPorDosArrowSimple = num => num * 2;
console.log(multiplicarPorDosArrowSimple(5)); // llamada a la función arrow simple.