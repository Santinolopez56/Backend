import express from 'express';
import productRouter from "..//src/route/router";

const app = express();
const PORT = 8080

app.use ('/',productRouter)

app.listen(PORT, () => {
    console.log("Servidor en el puerto "+PORT)
});

