export class Endereco {
  rua: string;
  numero: number;
  cidade: string;
  cep: string;

  constructor(rua: string, numero: number, cidade: string, cep: string) {
    this.rua = rua;
    this.numero = numero;
    this.cidade = cidade;
    this.cep = cep;
  }
}
