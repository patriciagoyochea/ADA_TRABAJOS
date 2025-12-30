//●	Ejercicio 2: Eliminar al último invitado
//Tienes una lista de invitados a una fiesta ["Ana", "Juan", "Carlos", "Sofía"]. 
//El último invitado no puede asistir. Elimina al último invitado y muestra quién fue eliminado y el estado actualizado de la lista

let invitados = ["Ana", "Juan", "Carlos", "Sofía"];
// 2. Usamos el método .pop() que tiene dos funciones: elimina el ÚLTIMO elemento y nos devuelve ese valor[cite: 541].
// Guardamos ese valor (en este caso "Sofía") en la variable 'eliminado'.
let eliminado = invitados.pop();
console.log("Invitado eliminado: " + eliminado);
///Imprimimos la lista 'invitados' nuevamente para verificar que ahora tiene un elemento menos[cite: 541].
console.log("Lista actualizada: " + invitados);