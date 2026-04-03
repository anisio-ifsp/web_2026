type Categoria = "Espadachim" | "Mago" | "Arqueiro";

class Heroi {
  nome: string;
  categoria: Categoria;
  ataque: number;
  custo: number;
  recurso: number; 

  constructor(nome: string, categoria: Categoria, ataque: number, custo: number) {
    this.nome = nome;
    this.categoria = categoria;
    this.ataque = ataque;
    this.custo = custo;

    this.recurso = 0;

    if (categoria === "Espadachim") {
      this.recurso = 50; 
    } else if (categoria === "Mago") {
      this.recurso = 40; 
    } else if (categoria === "Arqueiro") {
      this.recurso = 10; 
    }
  }

  atacar(): void {
    if (this.recurso >= this.custo) {
      this.recurso -= this.custo;
      console.log(`Ataque de ${this.nome} bem sucedido, restando ${this.recurso} de recurso`);
    } else {
      console.log(`Ataque de ${this.nome} falhou por falta de recurso`);
    }
  }
}


const espadachim: Heroi = new Heroi("Gilberto Barros", "Espadachim", 20, 10);
espadachim.atacar();

const mago: Heroi = new Heroi("Merlin", "Mago", 30, 15);
mago.atacar();

const arqueiro: Heroi = new Heroi("Robin Hood", "Arqueiro", 25, 2);
arqueiro.atacar();
