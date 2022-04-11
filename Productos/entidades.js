class Producto{
    title;
    price;
    thumbnail;
    constructor(title, price, thumbnail){
        this.title = title;
        this.price = price;
        this.thumbnail =thumbnail;
    } 
}
class ProductoConId {
    id;
    producto;
    constructor(id, producto){
        this.id = id;
        this.producto = producto;
    }
}

class Contenedor{
    idGlobal;
    lista;
    constructor(){
        this.idGlobal = 1;
        this.lista = []
    }
    add(producto){
        const productoConId = new ProductoConId(this.idGlobal, producto);
        this.lista.push(productoConId);
        this.idGlobal = this.idGlobal + 1;
    }
    getAll(){
        return this.lista;
    }
    getById(id){

        for(var i=0; i< this.lista.length ; i++){
            
            const productoConId = this.lista[i];
            console.log(productoConId)
            if(id===productoConId.id){
                return productoConId.producto
            }
        }
        return undefined;
    }
    postProduct(product){
        this.add(product);
        const ultimoElemento = this.lista.length -1
        return this.lista[ultimoElemento];
    }
    putProduct(id,producto){
        for(var i=0; i< this.lista.length; i++){
            const productoConId = this.lista[i];
            if(id === productoConId.id){
                productoConId.producto=producto;
                return productoConId;
            }
        }
        return undefined;
    }
    deleteProduct(id){
        const nuevaLista = []
        for(var i=0; i<this.lista.length;i++){
            const productoConId = this.lista[i];
            if(id !== productoConId.id){
                nuevaLista.push(productoConId);
            }
        }
        console.log("actual", this.lista);
        console.log("nueva", nuevaLista);
        if (this.lista.length === nuevaLista.length) {
            return undefined;
        }
        this.lista = nuevaLista
        return nuevaLista;
    }
}

module.exports = {
    Producto,
    ProductoConId,
    Contenedor
}