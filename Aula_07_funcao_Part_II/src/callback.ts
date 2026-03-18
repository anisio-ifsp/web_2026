function imprimir(param: any):void{
    console.log("A operacao efetuada resultou em: " + param);
}

function imprimir2(param: any):void{
    console.log("A operacao efetuada resultou em: " + param);
}

function concatenar(a: string, b: string, callback:(param:string)=>void): void {
    var op = a + " " + b;
    callback(op);
}

function somar(a: number, b: number, callback:(param:number)=> void): void {
    var op = a + b;
    callback(op);
}

concatenar("Hello", "World", imprimir );
somar(2,4, imprimir)