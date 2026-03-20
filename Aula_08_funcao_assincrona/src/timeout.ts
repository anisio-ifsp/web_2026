console.log("Antes do timeout...");
let frase = "Condição especifica";

const timeout = setTimeout(()=> console.log("Executando o timeout"),2000);

frase = "Mudou";
if(frase !== "Condição especifica"){
    clearTimeout(timeout);
    console.log("Dentro...");
}
console.log("Depois do timeout...");