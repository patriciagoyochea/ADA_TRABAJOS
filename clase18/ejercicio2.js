//Ejercicio 2: FizzBuzz. Escribe un programa que imprima los números del 1 al 100. Pero para los múltiplos de 3,
//imprime "Fizz" en lugar del número, y para los múltiplos de 5, imprime "Buzz". Para los
//números que son múltiplos de tanto 3 como 5, imprime "FizzBuzz".
for (let i = 1; i <= 100; i++) {
  let resultado = '';

  // Verificar si el número es múltiplo de 3 y 5
  if (i % 3 === 0 && i % 5 === 0) {
    resultado = 'FizzBuzz';
  }
  // Verificar si el número es múltiplo de 3
  else if (i % 3 === 0) {
    resultado = 'Fizz';
  }
  // Verificar si el número es múltiplo de 5
  else if (i % 5 === 0) {
    resultado = 'Buzz';
  }
  // Si no es múltiplo ni de 3 ni de 5, imprimir el número
  else {
    resultado = i;
  }

  console.log(resultado);
}
