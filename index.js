const express = require('express');
const { entidades, getRutas } = require('./Productos')
const { Contenedor, Producto } = entidades;
const app = express();
const micontenedor = new Contenedor();
const rutas = getRutas(micontenedor);
app.use(express.json());
app.use('/api/productos', rutas);

const server = app.listen(8080, () =>{
    // Datos de prueba
    micontenedor.add(new Producto("auricular",5,"url1"));
    micontenedor.add(new Producto("teclado",56,"url2"));
    micontenedor.add(new Producto("mouse",64,"url3"));
    console.log("servidor http en el puerto 8080");
});

server.on('error', (err) => {
    console.log("Se ha producido un error,", err.message);
});
