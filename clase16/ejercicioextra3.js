//Encuentra la película más corta y analiza los títulos largos
//Supón que tienes una lista de películas con su duración en minutos: const movies = [{ title: 'El Señor de los Anillos', duration: 200 },
//{ title: 'Inception', duration: 148 },
//{ title: 'Matrix', duration: 136 },
//{ title: 'Toy Story', duration: 81 },
//{ title: 'Coco', duration: 105 }];
//Queremos:
//Encontrar la película más corta en duración.
//o De las películas restantes, quedarnos con aquellas cuyo título tenga más de 10 caracteres.
//o Crear una lista de los títulos largos en minúsculas.
//Imprime en la consola:
//o El título de la película más corta.
//o La lista de títulos largos en minúscula
const movies = [
{ title: 'El Señor de los Anillos', duration: 200 },
{ title: 'Inception', duration: 148 },
{ title: 'Matrix', duration: 136 },
{ title: 'Toy Story', duration: 81 },
{ title: 'Coco', duration: 105 }
];
let peliculaMasCorta = movies.reduce(function(min, actual) {
    if (actual.duration < min.duration) {
        return actual;      
    } else {
        return min;      
    }
});
let titulosLargos = movies
    .filter(function(peli) {
        return peli.title.length > 10;
    })
    .map(function(peli) {
        return peli.title.toLowerCase();
    });
console.log("La película más corta es: " + peliculaMasCorta.title);
console.log("Títulos largos en minúscula: " + titulosLargos);   