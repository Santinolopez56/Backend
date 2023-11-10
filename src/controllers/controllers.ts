import { Request, Response } from "express";

let productmercancia=[
    {nombre:"Flores", modelo:"Tulipan", pais_de_origen:"Mongolia", precio:50},

    {nombre:"Teclado", modelo:"Redragon kumara", pais_de_origen:"China", precio:30000},

    {nombre:"Cerveza", modelo:"Alemana", pais_de_origen:"Alemania", precio:120}  
];

export function func (_: any, res: Response) {
    res.send("Funciona");
}
export function getProducts (_ :any, res :Response) {
    res.send (productmercancia);
}

export function precio (_: any , res:Response) {
    res.send (productmercancia.filter(productos => productos.precio > 100));
}
