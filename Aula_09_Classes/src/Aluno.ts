export class Aluno{
    nome: string;
    idade: number;
    curso: string;
    matricula: string;

    constructor(idade: number, nome: string,curso: string,matricula: string){
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
        this.matricula =matricula;
    }

    imprimir():void{
        console.log(`Nome: ${this.nome}\n Idade: ${this.idade}`);
    }

}
