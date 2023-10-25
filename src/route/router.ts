import {Router} from "express";

const productRouter = Router();


productRouter.get('/1',(_, res) =>{
    res.send(productmercancia)
});

productRouter.get('/2',(_, res) =>{
    res.send(productmercancia.filter(productos => productos.precio > 100))
});

productRouter.get('/5',(_, res) =>{
    res.send(productmercancia.filter(productos => productos.pais_de_origen = "Mongolia"))
});

productRouter.put('/3',(_, res) =>{
    res.send()
});

export default productRouter;

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
