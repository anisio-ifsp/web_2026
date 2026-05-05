import { Voo } from "./models/Voo";

const jsonBruto = '{"id_voo": "DRN-7742", "data_envio": "2026-04-28", "detalhes": { "altitude_max": 120, "sensores": ["GPS", "Termometro", "Lidar"] }, "pacotes": [ {"peso": 1.2, "descricao": "Medicamentos"}, {"peso": 0.8, "descricao": "Suprimentos"} ] }';
	
	class Main {
		static executar() {
		    const dadosSimulados = JSON.parse(jsonBruto);
            console.log("--- Iniciando Sistema de Logistica ---");

            const meuVoo = new Voo(dadosSimulados);

            console.log("Total a transportar: " + meuVoo.getPesoTotal() + "kg");

            meuVoo.imprimir();
		}
	}

	Main.executar();