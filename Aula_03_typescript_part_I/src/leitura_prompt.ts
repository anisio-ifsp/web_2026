import promptSync from "prompt-sync";

const prompt = promptSync();

const nome:string = prompt("Digite seu nome: ");
const idade: number = Number(prompt("Digite sua idade: ") );

console.log(`Olá, ${nome}! Você tem ${idade} anos.`);