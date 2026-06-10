import { executarComandoSQL } from "../database/mysql";
import { Product } from "../model/Product";

export class ProductRepository {
    private static instance: ProductRepository;

    static getCreateTableQuery(): string {
        return `
        CREATE TABLE IF NOT EXISTS Product (
            id INT AUTO_INCREMENT PRIMARY KEY, 
            name VARCHAR(255) NOT NULL, 
            price DECIMAL(10,2) NOT NULL
        );
    `;
    }

    private constructor() { }

    static getInstance() {
        if (!this.instance) {
            this.instance = new ProductRepository()
        }
        return this.instance
    }

    async insertProduct(product: Product): Promise<Product> {
        const resultado = await executarComandoSQL(
            "INSERT INTO vendas.Product (name, price) VALUES (?, ?)",
            [product.name, product.price]
        );

        const idGerado = resultado.insertId;

        const newProduct = new Product(idGerado, product.name, product.price);

        console.log('Produto inserido com sucesso:', newProduct);
        return newProduct;
    }

    async findAll(): Promise<Product[]> {
        const linhas = await executarComandoSQL("SELECT id, name, price FROM vendas.Product", []);

        // O MySQL retorna um array de objetos puros. Mapeamos para objetos da classe Product.
        const produtos: Product[] = linhas.map((linha: any) => {
            return new Product(linha.id, linha.name, Number(linha.price));
        });

        return produtos;
    }

    async findById(id: number): Promise<Product | null> {
        const linhas = await executarComandoSQL(
            "SELECT id, name, price FROM vendas.Product WHERE id = ?",
            [id]
        );

        if (linhas.length === 0) {
            return null;
        }

        const linha = linhas[0];
        return new Product(linha.id, linha.name, Number(linha.price));
    }

}