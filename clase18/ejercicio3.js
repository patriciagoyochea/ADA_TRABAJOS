//Ejercicio 3: Encontrar el número faltante
//Dada una matriz de n-1 números enteros únicos en el rango de 1 a n, encuentra el número
//que falta en la secuencia.
function encontrarNumeroFaltante(arr) {
  const n = arr.length + 1; // El tamaño del arreglo más 1 es el valor de n
  const sumaEsperada = (n * (n + 1)) / 2;  // Suma de los primeros n números
  const sumaArreglo = arr.reduce((acc, num) => acc + num, 0); // Suma de los números en el arreglo
  
  return sumaEsperada - sumaArreglo; // El número faltante es la diferencia
}
const arr = [1, 2, 4, 5, 6];  // El número que falta es 3
console.log(encontrarNumeroFaltante(arr));  // Output: 3
