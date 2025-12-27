//Definimos un objeto literal llamado "auto"
const auto = {  
    //Propiedades del objeto
    marca: 'Toyota', //propiedad marca del auto
    modelo: 'Corolla', //propiedad modelo del auto
    anio: 2020,     //propiedad año del auto
    color: 'Azul', //propiedad color del auto

    //método que usa this para describir el auto
    describir : function() {    
        return `Este auto es un ${this.marca} ${this.modelo} del año ${this.anio} de color ${this.color}.`; 
    }
};  

//Llamada al método "describir" del objeto "auto"
console.log(auto.describir());

//Accediendo directamente a las propiedades del objeto
console.log(`Marca: ${auto.marca}`); // Muestra la marca del auto
console.log(`Modelo: ${auto.modelo}`); // Muestra el modelo del auto    
console.log(`Año: ${auto.anio}`); // Muestra el año del auto
console.log(`Color: ${auto.color}`); // Muestra el color del auto