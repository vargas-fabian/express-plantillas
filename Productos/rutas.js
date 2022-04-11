
const express = require('express');

const notFound = {
    error : "producto no encontrado"
};

const GetRutas = (micontenedor) => {

    const router = express.Router();

    router.get('/',(_ , res) => {
        res.send(micontenedor.getAll())
    })
    
    router.get('/:id',(req,res) => {
        const id = parseInt(req.params.id);
        const encontrado = micontenedor.getById(id);
        if(encontrado){
          res.send(encontrado);  
        }
        else{
            res.status(404).json(notFound)
        }
        
    
    })
    router.post('/',(req , res) => {
        const productoRecibido = req.body;
        res.send(micontenedor.postProduct(productoRecibido))
        console.log(micontenedor.getAll())
    })
    router.put('/:id',(req, res) => {
        const id = parseInt(req.params.id)
        const nuevoProducto = req.body;
        const actualizado = micontenedor.putProduct(id , nuevoProducto);
        if(actualizado){
          res.send(actualizado);  
        }
        else{
            res.status(404).json(notFound)
        }
    })
    router.delete('/:id',(req , res)=>{
        const id = parseInt(req.params.id);
        const eliminado =micontenedor.deleteProduct(id);
        if(eliminado){
            res.send(eliminado)    
        } 
        else{
            res.status(404).json(notFound)
        }
    });
    return router
}

module.exports = GetRutas