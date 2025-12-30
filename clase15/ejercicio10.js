//	Ejercicio 10: Reemplazar una palabra en una frase
//Tienes la frase "Me gusta el invierno". Cambia la palabra "invierno" por "verano" y muestra la frase actualizada.
let frase = "Me gusta el Invierno";

//Usamos el método .replace("buscar", "reemplazar") para cambiar una palabra específica.
// Este método busca "invierno" y lo sustituye por "verano", guardando el resultado nuevo en 'nuevaOracion'.
let nuevaFrase = frase.replace("Invierno", "Verano");
console.log(nuevaFrase);