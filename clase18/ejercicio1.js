//Ejercicio 1: Palíndromo
//Escribe una función que determine si una cadena dada es un palíndromo. Un palíndromo es
//una palabra, frase, número o secuencia de caracteres que se lee igual hacia adelante que
//hacia atrás, ignorando espacios, signos de puntuación y mayúsculas/minúsculas.
function esPalindromo(cadena) {
  // Convertir a minúsculas y eliminar caracteres no alfanuméricos
  const cadenaLimpia = cadena
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');

  // Comparar con la cadena invertida
  const reverso = cadenaLimpia.split('').reverse().join('');
  return cadenaLimpia === reverso;
}
console.log(esPalindromo("Anita lava la tina")); // true
console.log(esPalindromo("A man, a plan, a canal: Panama")); // true
console.log(esPalindromo("Hola mundo")); // false
