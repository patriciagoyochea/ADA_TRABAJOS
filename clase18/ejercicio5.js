//Ejercicio 5: Servicio meteorológico
//El servicio meteorológico, para llevar el control diario de temperatura, utiliza un objeto
//temperatura donde registra día —valor numérico del día—, mes —valor numérico—,
//temperatura máxima y temperatura mínima, correspondiente a dicho día. Las temperaturas—objeto temperatura— están cargados en un array.
//a) Ordenar por temperatura mínima de menor a mayor.
//b) Ordenar por temperatura máxima de mayor a menor.
const temperaturas = [
  { día: 1, mes: 1, temperatura_maxima: 25, temperatura_minima: 10 },
  { día: 2, mes: 1, temperatura_maxima: 30, temperatura_minima: 15 },
  { día: 3, mes: 1, temperatura_maxima: 22, temperatura_minima: 12 },
  { día: 4, mes: 1, temperatura_maxima: 28, temperatura_minima: 18 },
  { día: 5, mes: 1, temperatura_maxima: 35, temperatura_minima: 20 },
];

// a) Ordenar por temperatura mínima de menor a mayor
const ordenarPorTemperaturaMinima = [...temperaturas].sort((a, b) => a.temperatura_minima - b.temperatura_minima);

// b) Ordenar por temperatura máxima de mayor a menor
const ordenarPorTemperaturaMaxima = [...temperaturas].sort((a, b) => b.temperatura_maxima - a.temperatura_maxima);

console.log("Ordenado por temperatura mínima (de menor a mayor):");
console.log(ordenarPorTemperaturaMinima);

console.log("\nOrdenado por temperatura máxima (de mayor a menor):");
console.log(ordenarPorTemperaturaMaxima);
