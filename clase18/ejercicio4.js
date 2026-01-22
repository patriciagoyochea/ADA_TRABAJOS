//Ejercicio 4: Concurso de Likes
//En un concurso de fotografía, donde los usuarios publican una fotografía y obtienen likes,
//se registra la cantidad de likes obtenidos por cada usuario en un array. Ordenar los valores
//para poder indicar cuál fue la mayor cantidad de likes obtenidos, cuánto obtuvo el segundo,
//cuánto el tercero y cuánto el que menos likes obtuvo —suponer que participaron 15
//usuarios y suponer para cada uno, una cantidad de likes—.
function concursoLikes(likes) {
  // Ordenamos el arreglo en orden descendente
  const ordenado = likes.slice().sort((a, b) => b - a);
  console.log(`1er lugar: ${ordenado[0]} likes`);
  console.log(`2do lugar: ${ordenado[1]} likes`);
  console.log(`3er lugar: ${ordenado[2]} likes`);
  console.log(`Último lugar: ${ordenado[ordenado.length - 1]} likes`);
}
const likes = [120, 340, 500, 200, 450, 600, 750, 320, 560, 230, 180, 390, 150, 700, 410];

concursoLikes(likes);
