import { Medico } from "./Medico";
import { Paciente } from "./Paciente";

export
    class Prontuario {
    paciente: Paciente;
    medico: Medico;

    constructor(paciente: Paciente, medico: Medico) {
        this.paciente = paciente;
        this.medico = medico;
    }

    exibirProntuario(): void {
        const listaRemedios = this.paciente.remedios
            .map(r => `- ${r.nome}, dosagem: ${r.dosagem}\n`)
            

        console.log(
            `Paciente: ${this.paciente.pessoa.nome}\n` +
            `Médico: ${this.medico.pessoa.nome} (${this.medico.especialidade})\n` +
            `Remédios:\n${listaRemedios}`
        );
    }
}
