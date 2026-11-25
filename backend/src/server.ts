import express from 'express';
import type { Request, Response } from "express"

const app = express();
const port = 3000;

app.use(express.json());

// Verifica se a aplicação está funcionando corretamente e pronta para receber tráfego
app.get('/health', (req: Request, res: Response) => {
    res.status(200).json({status: "ok"})
})


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/health`)
})