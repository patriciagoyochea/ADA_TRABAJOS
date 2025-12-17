//FUNCION EXPRESADA
//Expresion anonima asignada a una variable
const encontrarMayor = function(a,b){
    if(a > b){
        return a + " es mayor";
    } else if(b > a){
        return b + " es mayor";
    } else {
        return "Ambos son iguales";
    }   
};
console.log("EL MAYOR ENTRE 15 Y 25 ES:" encontrarMayor(15,25)); // LLama a la funcion
