// array.map<U>(callback: (value: T, index: number) => U): U[]
const numeros: number[] = [1 ,2, 3, 4, 5];

const dobro: number[] = numeros.map(n => n*2);
const string: string[] = numeros.map(n => `Número: ${n}`);
console.log(string);

type Produto = {id: number, nome:string, preco: number};
const produtos: Produto[]= [
    {id:1, nome: 'Mouse', preco: 50},
    {id:2, nome: 'MousePad', preco: 500}
];
 
const nomes: string[] = produtos.map(valor => valor.nome);

const listaFormatada = produtos.map( p => ({
    id: p.id,
    label: `${p.nome} - R$ ${p.preco.toFixed(2)}`,
    disponivel: true
}));

console.log(listaFormatada);


