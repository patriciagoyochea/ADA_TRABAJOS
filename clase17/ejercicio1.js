//Manipulación Completa de un Objeto Literal y Arrays
//Crea un objeto literal que represente un estudiante. El mismo debe tener las siguientes
//propiedades: nombre, edad y un array de notas (con 5 notas).
//Luego, escribe la función “procesarEstudiante” que tendrá como objetivo realizar las siguientes tareas:
//1. Agregar una nueva nota al array de notas.
//2. Eliminar la primera nota del array.
//3. Calcular el promedio de las notas restantes.
//4. Convertir el nombre del estudiante a mayúsculas. Para esto investiga sobre elmétodo “toUpperCase()”.
//5. Devuelver un objeto con el nombre en mayúsculas y el promedio de las notas.
let estudiante = {
    nombre: "Patricia",
    edad: 34,
    notas: [8, 9, 7, 9, 8]
};
function procesarEstudiante(estudiante) {    
    // 1. Agregar una nueva nota al array de notas, el 9.
    estudiante.notas.push(9);
    // 2. Eliminar la primera nota del array.
    estudiante.notas.shift();   
    // 3. Calcular el promedio de las notas restantes.
    // Usamos el método .reduce() para sumar todas las notas del array.
    // 'acum' es la caja donde guardamos la suma y 'nota' es el valor de turno.
    // Iniciamos el acumulador en 0 para asegurar una suma limpia desde el principio.
    let sumaNotas = estudiante.notas.reduce((acum, nota) => acum + nota, 0);
    let promedioNotas = sumaNotas / estudiante.notas.length;

    // 4. Convertir el nombre del estudiante a mayúsculas.
    let nombreMayusculas = estudiante.nombre.toUpperCase();
    // 5. Devolver un objeto con el nombre en mayúsculas y el promedio de las notas.
    return {
        nombre: nombreMayusculas,
        promedio: promedioNotas
    };  
}
console.log(procesarEstudiante(estudiante));    
