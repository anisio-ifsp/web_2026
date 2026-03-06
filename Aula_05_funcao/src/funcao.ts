function mensagem( f: string):string{
    return f;
}

const mensagemLambda = (f: string):string => f;

console.log(mensagemLambda("Olá ADS!!!"));

function soma(a:number, b:number):void{
    console.log(a + b);
}

const somaLambda = (a:number, b:number):void => console.log(a + b);
somaLambda(2,2)
soma(2,2);

function saudacao(nome:string = "Visitante"):string{
    return `Olá, ${nome}`;
}

const saudacaoLambda = (nome:string = "Visitante"):string => `Olá, ${nome}`;

saudacao("Anisio");

const multiplicacaoOpcional = (a:number, b?:number):number => {
    if(b === undefined){
        return a;
    }
    return a * b;
};

multiplicacaoOpcional(1, 2);

const multiplicacaoOpTernario = (a:number, b?:number):number => (b === undefined) ? a : a *b;

const multOpCoalescencia = (a:number, b?:number):number => a * (b ?? 1);
