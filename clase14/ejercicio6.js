//Para este ejercicio deberán definir un objeto literal “deportista”, con los siguientes atributos: nombre, energía, 
// experiencia.
//Ademas queremos poder pedirle al deportista que entrene. Para esto, nuestro trabajo va a ser realizar una función 
//“entrenarHoras.”
//La función entrenarHoras tiene las siguientes tres características:
//Recibe por parámetro la cantidad de horas.
//Resta a su energía (this.energia) la cantidad de horas x 5.
//Incrementa su experiencia (this.experiencia) la cantidad de horas x 2.
//Una vez definida la función, podemos ejecutar el código y ver cómo va variando la energía y experiencia del deportista 
//por consola.
let deportista ={
    nombre : "messi",//Propiedad de tipo string
    energia : 100, //propiedad de tipo number
    experiencia : 100, //propiedad de tipo number

 // 3. MÉTODO (FUNCIÓN DENTRO DE UN OBJETO)
    // Definimos una función anónima asignada a la clave 'entrenarHoras'.
    // Esto permite que el objeto realice acciones. Recibe el parámetro 'horas'.
    entrenarHoras: function(horas) {
        
        // 4. PALABRA CLAVE 'THIS'
        // 'this' hace referencia al objeto actual ('deportista').
        // Nos permite acceder y modificar sus propias propiedades desde adentro.
        // this.energia -= ... es igual a decir: this.energia = this.energia - ...
        // Restamos 5 puntos de energía por cada hora entrenada.
        this.energia -= horas * 5;
        
        // this.experiencia += ... es igual a decir: this.experiencia = this.experiencia + ...
        // Sumamos 2 puntos de experiencia por cada hora entrenada.
        this.experiencia += horas * 2;
    }
};   
// 5. ACCESO A PROPIEDADES (DOT NOTATION)
// Usamos el punto (.) para leer los valores actuales del objeto antes de modificarlo.
console.log("Energía inicial: " + deportista.energia);
console.log("Experiencia inicial: " + deportista.experiencia);
// 6. INVOCACIÓN DEL MÉTODO
// Ejecutamos la función interna del objeto.
// Le pasamos el valor 2 (horas), lo que activará la lógica interna (restar energía, sumar experiencia).
deportista.entrenarHoras(2);

console.log("--- Después de entrenar 2 horas ---");
console.log("Energia final: " + deportista.energia);
console.log("Energia final:" + deportista.experiencia);

