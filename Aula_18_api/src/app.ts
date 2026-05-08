import express, { Request, Response } from "express";
import { Produto } from "./Produto";

const app = express();
const PORT = process.env.PORT ?? 3000;
app.use(express.json());

const produtos: Produto[] =[];

function hellworld(req: Request, res: Response):void{
    res.status(200).send('Hello World!!');
}

function filtraProdutoPorID(req: Request, res: Response):void{
    try{
        let id:any = req.params.id;
        
        res.status(200).json({ID: id});

    }catch(e: unknown){
        res.status(400).json({Message: "Necessário informar um ID válido"});
    }
}

function filtraProdutoPorNome(req: Request, res: Response):void{
    try{
        let name:any = req.query.name;
        
        res.status(200).json({Name: name });

    }catch(e: unknown){
        res.status(400).json({Message: "Necessário informar um ID válido"});
    }
}

function criarProduto(req: Request, res: Response):void{
    try{
        let data:any = req.body;
        if(!data.nome || !data.preco || !data.fabricante){
            throw new Error("Favor enviar os valores corretos");
        }

        let produto = new Produto(1,data.nome,data.preco,data.fabricante);
        produtos.push(produto);
        res.status(201).json(produto);

    }catch(e: unknown){
        res.status(400).json({Message: "Necessário informar as informações do produto."});
    }
}

app.get('/api/produto/:id', filtraProdutoPorID);
app.get('/api/produto', filtraProdutoPorNome);
app.post('/api/produto',criarProduto);

app.listen(PORT, () => console.log(`API rodando na URL : http://localhost:${PORT}`));