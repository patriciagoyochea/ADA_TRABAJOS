//Define dos objetos libro1 y libro2 con las siguientes propiedades y valores:
//título: una cadena con el título del libro.
//autor: una cadena con el nombre del autor del libro.
//anioPublicacion: un número con el año de publicación del libro.
//Luego, crea una función llamada mostrarLibro que tome un arreglo de libros como parámetro y muestre 
//por consola la información de cada libro en el formato especificado.
// 1. DEFINICIÓN DE OBJETOS LITERALES
// Creamos una variable 'libro1' que almacena un OBJETO.
// Usamos llaves { } para agrupar las características (propiedades) de este libro en particular.
let libro1 = {
    titulo: "El Principito",           // Propiedad String: Título del libro.
    autor: "Antoine de Saint-Exupéry", // Propiedad String: Autor.
    anioPublicacion: 1943              // Propiedad Number: Año.
};

// 2. CREACIÓN DE UN SEGUNDO OBJETO
// Repetimos el proceso para un segundo libro con la misma estructura (mismas claves), pero distintos valores.
let libro2 = {
    titulo: "Harry Potter",
    autor: "J.K. Rowling",
    anioPublicacion: 1997
};
// 3. DEFINICIÓN DE LA FUNCIÓN
// Declaramos una función que recibe un parámetro llamado 'libros'.
// Esperamos que este parámetro sea un ARRAY (una lista) de objetos.
function mostrarLibro(libros) {
    
// 4. ITERACIÓN (BUCLE FOR)
// Recorremos el array desde la posición 0 hasta el final (libros.length).
for (let i = 0; i < libros.length; i++) {
        
// 5. ACCESO A DATOS
// libros[i]: Accede al objeto específico que está en la posición actual del array.
// libros[i].titulo: Accede a la propiedad 'titulo' DE ESE objeto.
// Concatenamos las propiedades con texto para darle formato a la salida.
console.log("Título: " + libros[i].titulo + ", Autor: " + libros[i].autor + ", Año: " + libros[i].anioPublicacion);
    }
}

// 6. CREACIÓN DEL ARRAY
// Creamos un arreglo llamado 'biblioteca' que contiene los dos objetos que definimos arriba.
// Ahora 'biblioteca' es una lista de objetos: [ {libro1}, {libro2} ].
let biblioteca = [libro1, libro2];

mostrarLibro(biblioteca);