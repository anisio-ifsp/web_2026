console.log("Antes do interval...");

let contador = 0;
const interval = setInterval(()=> {
    contador++;
    console.log("Rodando o interval");
    if( contador === 3){
        console.log("3 execuções");
        clearInterval(interval);
    }
},500);

console.log("Depois do interval...");