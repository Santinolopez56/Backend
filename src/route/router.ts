import {Router} from "express";

const productRouter = Router();

productRouter.get('/catalogo',(_, res) =>{
    res.send("PRODUCTOS!")
});

export default productRouter;