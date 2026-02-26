for(let i = 0; i < 5; i++){
    console.log(`Iteração: ${i}`)
}

let contador = 0;
while (contador < 5){
    console.log(`Iteração: ${contador}`)
    contador++;
}

do{
    // desencolvimento...
}while(contador < 3);

const numeros = [10, 20, 30]

for(const num of numeros){
    console.log("Numeros: ", num);
}

// const pessoa = {nome: "Anisio", idade: 25, cidade: "Boituva"};
// for( const chave in pessoa){

// }
