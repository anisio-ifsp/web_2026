import { Request, Response } from 'express';
import { ProductService } from '../service/ProductService';

export class ProductController {
    private productService = new ProductService();

    async criar(req: Request, res: Response) {
        try {
            const { name, price } = req.body;
            
            if (!name || !price) {
                return res.status(400).json({ erro: "Nome e preço são obrigatórios." });
            }

            const novoProduto = await this.productService.createProduct({ name, price });
            return res.status(201).json(novoProduto);
        } catch (error) {
            return res.status(500).json({ erro: "Erro interno ao salvar produto." });
        }
    }

    async listar(req: Request, res: Response) {
        try {
            const produtos = await this.productService.getAllProducts();
            return res.json(produtos);
        } catch (error) {
            return res.status(500).json({ erro: "Erro ao buscar produtos." });
        }
    }
}