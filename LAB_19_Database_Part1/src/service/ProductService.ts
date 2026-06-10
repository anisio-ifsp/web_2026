import { Product } from "../model/Product";
import { ProductRepository } from "../repository/ProductRepository";

export class ProductService {
    private productRepository = ProductRepository.getInstance();

    async createProduct(data: any): Promise<Product> {
        if (!data.name || !data.price) {
            throw new Error('Favor informar os campos obrigatórios');
        }

        const novoProduct = new Product(null, data.name, Number(data.price));

        return this.productRepository.insertProduct(novoProduct);
    }

    async getAllProducts(): Promise<Product[]> {
        return this.productRepository.findAll();
    }

    async getProductById(id: any): Promise<Product> {
        const idNumerico = Number(id);

        if (isNaN(idNumerico)) {
            throw new Error('O ID fornecido é inválido.');
        }

        const produto = await this.productRepository.findById(idNumerico);

        if (!produto) {
            throw new Error(`Produto com o ID ${idNumerico} não foi encontrado.`);
        }

        return produto;
    }
}