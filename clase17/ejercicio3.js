//Ejercicio 3: Gestión Compleja de Arrays. A partir del siguiente array de productos, escriba la función ‘gestionarProductos’ que
//realice las siguientes tareas:
//1. Añada un nuevo producto al array.
//2. Elimine el último producto del array.
//3. Encuentre el índice de un producto específico. En este punto pueden usar forEach o
//investigar el método “findIndex()”
//4.Verifique si existe un producto con precio mayor a 50. Para esto investigar elmétodo “.some()”
//5. Devuelva una cadena de nombres de productos separados por comas.
let productos = [
    { nombre: "Producto 1", precio: 30 },   
    { nombre: "Producto 2", precio: 60 },
    { nombre: "Producto 3", precio: 45 },
    { nombre: "Producto 4", precio: 80 }
];
function gestionarProductos(productos) {
    // 1. Añadir un nuevo producto al array
    productos.push({ nombre: "Producto 5", precio: 25 });
    // 2. Eliminar el último producto del array
    productos.pop();
    // 3. Encontrar el índice de un producto específico (Producto 2)
    let indiceProducto2 = productos.findIndex(producto => producto.nombre === "Producto 2");   
    // 4. Verificar si existe un producto con precio mayor a 50.
    let existePrecioMayor50 = productos.some(producto => producto.precio > 50);
    // 5. Devolver una cadena de nombres de productos separados por comas.
    let nombresProductos = productos.map(producto => producto.nombre).join(", ");
    // Mostrar resultados
    console.log("Índice de Producto 2:", indiceProducto2);
    console.log("¿Existe producto con precio mayor a 50?:", existePrecioMayor50);
    console.log("Nombres de productos:", nombresProductos);
} 
gestionarProductos(productos);