const numeros = [1, 2, 3, 4, 5, 6, 7, 1, 2, 4]

const semDuplicados = numeros.filter( (valor, indice, self) => {
    return self.indexOf(valor) === indice 
});

console.log(semDuplicados);


let pares: number[] = numeros.filter(n => n % 2 === 0);

let maioresQueTres = numeros.filter(n => n > 3);

let valores = [10, null, 58, undefined, 200, 8];

let filtrados = valores.filter(v => v !== null && v !== undefined);

type Pessoa = {
    nome: string;
    idade: number
};

const pessoas: Pessoa[] = [
    {nome: "Ana", idade: 25},
    {nome: "Bia", idade: 15},
    {nome: "Anisio", idade: 23},
    {nome: "Carlota", idade: 14}
];

let maioresIdade = pessoas.filter( pessoa => pessoa.idade >= 18);