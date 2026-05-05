import { Pacote } from "./Pacote";
import { Detalhes } from "./Detalhes";

export class Voo {
    public id: string;
    public dataEnvio: Date;
    public detalhes: Detalhes;
    public listaPacotes: Pacote[];

    constructor(dados: any) {
        this.id = dados.id_voo;
        this.dataEnvio = new Date(dados.data_envio);
        this.detalhes = new Detalhes(dados.detalhes);

        // conforme você pediu:
        this.listaPacotes = dados.pacotes.map((item: any) => {
            return new Pacote(item.peso, item.descricao);
        });
    }

    public getPesoTotal(): number {
        let total = 0;

        for (const pacote of this.listaPacotes) {
            total += pacote.peso;
        }

        return total;
    }

    public imprimir(): void {
        console.log("=== DADOS DO VOO ===");
        console.log("ID: " + this.id);
        console.log("Data de Envio: " + this.dataEnvio.toDateString());

        console.log("\n--- Detalhes ---");
        console.log("Altitude Máxima: " + this.detalhes.altitudeMax + "m");

        console.log("Sensores:");
        this.detalhes.sensores.forEach((sensor, index) => {
            console.log("- " + sensor);
        });

        console.log("\n--- Pacotes ---");
        this.listaPacotes.forEach((pacote, index) => {
            console.log(
                "Pacote " + (index + 1) +
                " | Descrição: " + pacote.descricao +
                " | Peso: " + pacote.peso + "kg"
            );
        });

        console.log("\nPeso Total: " + this.getPesoTotal() + "kg");
    }
}