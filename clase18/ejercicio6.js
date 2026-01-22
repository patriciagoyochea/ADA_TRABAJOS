//Ejercicio 6: Ordenando personas
//¿Cómo podrías ordenar la colección, de menor a mayor, considerando solo la estatura? Utiliza bubble sort.
let personas = [
  {
    nombre: "Dua",
    apellido: "Lipa",
    ocupacion: "cantante",
    estatura: 173
  },
  {
    nombre: "Ariana",
    apellido: "Grande",
    ocupacion: "cantante",
    estatura: 160
  },
  {
    nombre: "Taylor",
    apellido: "Swift",
    ocupacion: "cantante",
    estatura: 180
  }
];
function bubbleSort(personas) {
  let n = personas.length;
  let cambio;

  do {
    cambio = false;
    for (let i = 0; i < n - 1; i++) {
      if (personas[i].estatura > personas[i + 1].estatura) {
        let temp = personas[i];
        personas[i] = personas[i + 1];
        personas[i + 1] = temp;
        cambio = true;
      }
    }
  } while (cambio);
}
bubbleSort(personas);
console.log(personas);