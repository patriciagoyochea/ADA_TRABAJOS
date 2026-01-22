//Calcula el total de ventas de productos seleccionados
//Supón que tienes una lista de productos con sus precios en formato de objeto:
//const products = [ { name: 'Laptop', price: 1000 },{ name: 'Mouse', price: 25 }{ name: 'Teclado', price: 50 },
//{ name: 'Monitor', price: 200 },{ name: 'Audífonos', price: 75 }
//];
//Queremos:
//o Seleccionar los productos cuyo precio sea mayor o igual a 50.
//o Obtener solo los nombres de esos productos.
//o Calcular el precio total sumando los precios de los productos seleccionados.
//o Imprime el total y los nombres de los productos seleccionados en la consola.
 let products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Mouse', price: 25 },
    { name: 'Teclado', price: 50 },
    { name: 'Monitor', price: 200 },
    { name: 'Audífonos', price: 75 }
];      
// Seleccionar los productos con precio mayor o igual a 50
let productosCaros = products.filter(function(producto) {
    return producto.price >= 50;
});
// Obtener los nombres de los productos seleccionados
let nombresProductos = productosCaros.map(function(producto) {
    return producto.name;
});

// Calcular el precio total de los productos seleccionados
let precioTotal = productosCaros.reduce(function (acumulador, producto){    
    return acumulador + producto.price;  
}, 0); // Iniciamos la suma en 0 
// Imprimir el total y los nombres de los productos seleccionados
console.log("Total: " + precioTotal);   
console.log("Productos: " + nombresProductos);