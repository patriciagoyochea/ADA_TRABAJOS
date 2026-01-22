// Lugar y números
//Para practicar la implementación del algoritmo de búsqueda binaria, vamos a empezar con
//un ejemplo simple. Quiero que se familiaricen con la sintaxis del mismo, por lo que no hare
//énfasis en los datos, sino en la solución.
//Dada la siguiente lista: let lista = [1,2,3,4,5,6,7,8,9,10,11]
//Utilizar el algoritmo de búsqueda binaria para responder los siguientes ítems:
//¿Cuál es la posición del número 1?
//Cuál es la posición del número 5?
//¿Cuál es la posición del número 6?
//¿Cuál es la posición del número 9?
//¿Cuál es la posición del número 11?
let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
function busquedaBinaria(array, elemento) {
    let inicio = 0
    let fin = array.length - 1
    while (inicio <= fin) {

        let mitad = Math.floor((inicio + fin) / 2)

    if (array[mitad] === elemento) {
        return mitad 
    }

    if (array[mitad] < elemento) {
            inicio = mitad + 1
    } else {
            fin = mitad - 1
        }
    }
    return -1
}
console.log("Posición del 1:", busquedaBinaria(list, 1))
console.log("Posición del 5:", busquedaBinaria(list, 5))
console.log("Posición del 6:", busquedaBinaria(list, 6))
console.log("Posición del 9:", busquedaBinaria(list, 9))
console.log("Posición del 11:", busquedaBinaria(list, 11))