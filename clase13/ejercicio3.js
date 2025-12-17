//Declara una variable global llamada saludoGlobal con el valor "Hola desde el scope global".
//  Luego, crea una función llamada mostrarMensaje que declare una variable local llamada saludoLocal 
// con el valor "Hola desde el scope local" y que imprima ambos mensajes.

let mensajeGlobal = "Hola desde el scope global";
function mostrarMensaje() {
    let mensajeLocal = "Hola desde el scope local";
    console.log(mensajeGlobal);//puede acceder a la variable global
    console.log(mensajeLocal);//puede acceder a la variable local
}
mostrarMensaje(); //llama a la funcion y muestra ambos mensajes
//console.log(mensajeLocal); //genera un error porque no puede acceder a la variable local

