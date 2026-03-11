//Ex 01

function maiuscula(texto: string): string {
    return texto.toUpperCase();
}

const maiuscula1 = (texto: string): string => texto.toUpperCase();

console.log(maiuscula("texto de exemplo"));
console.log(maiuscula1("texto de exemplo"));

//Ex 02

function expo(a: number, b: number): number {
    return a ** b;
}

const expo1 = (a: number, b: number): number => a ** b;

console.log(expo(5, 3));
console.log(expo1(5, 3));

//Ex 03

function dobrarNumeros(numeros: number[]): number[] {
    let numerosDobrados: number[] = []
    for (let i in numeros) {
        if (numeros[i]) { //Testei pois o compilador entende que existe a possibilidade de ter undefined e null
            numerosDobrados.push(numeros[i] * 2)
        }
    }
    return numerosDobrados;
}

const dobrarNumeros1 = (numeros: number[]): number[] => {
    let numerosDobrados: number[] = []
    for (let i in numeros) {
        if (numeros[i]) { //Testei pois o compilador entende que existe a possibilidade de ter undefined e null
            numerosDobrados.push(numeros[i] * 2)
        }
    }
    return numerosDobrados;
};

console.log(dobrarNumeros([1, 2, 3, 4]));
console.log(dobrarNumeros1([1, 2, 3, 4]));

//Ex 04

type Funcionario = {
    nome: string;
    cargo: string;
};

const funcionarios: Funcionario[] = [
    { nome: "Marcos", cargo: "Desenvolvedor" },
    { nome: "Fernanda", cargo: "Gerente" },
    { nome: "Carlos", cargo: "Desenvolvedor" },
    { nome: "Joana", cargo: "Analista" }
];
const cargoDesejado: string = "Desenvolvedor";

const separaPorCargos = (funcionarios: Funcionario[]): Funcionario[] =>{
    return funcionarios.filter(f => f.cargo === cargoDesejado)
}

console.log("Desenvolvedores: ", separaPorCargos(funcionarios))