import { Pessoa } from "./Pessoa";
import { Remedio } from "./Remedio";

export class Paciente {
  pessoa: Pessoa;
  remedios: Remedio[];

  constructor(pessoa: Pessoa, remedios: Remedio[]) {
    this.pessoa = pessoa;
    this.remedios = remedios;
  }
}
