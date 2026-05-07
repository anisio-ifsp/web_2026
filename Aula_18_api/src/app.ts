import express, { Request, Response } from "express";
import { Produto } from "./Produto";

const app = express();
const PORT = process.env.PORT ?? 3000;
app.use(express.json());

function helloWorld(req: Request, res: Response): void {
    res.status(200).send('Hello World!!');

}

function filtraProdutoPorID(req: Request, res: Response): void {
    try {
        let id = req.params.id
        res.status(200).json({ ID: id })
    } catch (e: unknown) {
        res.status(400).json({ Message: "Necessário informar o ID" })
    }
}

function filtrarProdutoPorNome(req: Request, res: Response): void {
    try {
        let name = req.query.name
        res.status(200).json({ Name: name })
    } catch (e: unknown) {
        res.status(400).json({ Message: "Necessário informar o nome" })
    }
}

function novoProduto(req: Request, res: Response): void {
    try {
        let data: any = req.body

        if (!data.nome || !data.preco || !data.fabricante) {
            throw new Error("Produto requer nome, preço e fabricante")
        }

        const produto = new Produto(data.id, data.nome, data.preco, data.fabricante)
        res.status(200).json(produto)
    } catch (e: unknown) {
        res.status(400).json({ Message: (e as Error).message })
    }
}

app.get('/api/hello/:id', helloWorld)

app.get('/api/product/:id', filtraProdutoPorID)
app.get('/api/product', filtrarProdutoPorNome)
app.post('/api/product', novoProduto)

app.listen(PORT, () => console.log(`API rodando na URL : http://localhost:${PORT}`));


