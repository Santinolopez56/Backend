import {Router} from "express";

const productRouter = Router();

let productmercancia=[
    {
    nombre:"Flores",
    modelo:"Tulipan",
    pais_de_origen:"Mongolia",
    precio:50
    },

    {
    nombre:"Teclado",
    modelo:"Redragon kumara",
    pais_de_origen:"China",
    precio:30000
    },

    {
    nombre:"Cerveza",
    modelo:"Alemana",
    pais_de_origen:"Alemania",
    precio:120
    }  
]

productRouter.get('/',(_, res) =>{
    res.send("Funciona")
});

//1)
productRouter.get('/productos',(_, res) =>{
    res.send(productmercancia)
});

//2)
productRouter.get('/precio',(_, res) =>{
    res.send(productmercancia.filter(productos => productos.precio > 100))
});

//3)
productRouter.get('/:productnombre',(req, res) =>{
    const { productnombre } = req.params;
    res.send(productnombre)
});

//4)
productRouter.get('/productos/:modelo',(req, res) =>{
    const { modelo } = req.params;
    const longitud = productmercancia.length;

    productmercancia = productmercancia.filter (producto=> producto.modelo !== modelo); 
    
    if (productmercancia.length === longitud){
        res.status(404).send ("No existe ese producto");

    } else {

       res.send("Se elimino su producto correctamente");
        
    }
});

//5)
productRouter.get('/pais/:pais', (req, res) => {
    const { pais } = req.params;

    const productosPorPais = productmercancia.find(producto => producto.pais_de_origen === pais);
  
    if (productosPorPais) {
    
        res.json(productosPorPais);

    } else {

        res.status(404).send('No se encontraron productos con ese pais.');
        
    }
  });

//6)
  productRouter.get('/precio/:precio', (req, res) => {
    const { precio } = req.params;

    const productosPorPrecio = productmercancia.find(producto => producto.precio === Number (precio));
  
    if (productosPorPrecio) {
    
        res.json(productosPorPrecio);

    } else {

        res.status(404).send('No se encontraron productos con ese pais.');
        
    }
  });


//7)
productRouter.post('/7',(_, res) =>{
    res.send()
});



export default productRouter;

