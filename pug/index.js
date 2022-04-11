const express = require('express');
const { entidades, getRutas } = require('../Productos')
const { Contenedor, Producto } = entidades;
const app = express();

const micontenedor = new Contenedor();
const rutas = getRutas(micontenedor);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/productos', rutas);

app.set("view engine", "pug");
app.set("views", __dirname+"/views");
app.use(express.static("public"));

app.get("/productos", (req,res) => {
    res.render("productos.pug", { productos: micontenedor.getAll() })
})
app.get("/", (req,res) => {
    res.render("cargar-productos.pug", { })
})
app.post('/productos', function(req, res) {
    res.redirect('/');
});

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
