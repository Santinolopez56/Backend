import express from 'express';
import "reflect-metadata"
import productRouter from "..//src/route/router";

const app = express();
const PORT = 8080

app.use ('/',productRouter)
app.use(express.json())

app.listen(PORT, () => {
    console.log("Servidor en el puerto "+PORT)
});

