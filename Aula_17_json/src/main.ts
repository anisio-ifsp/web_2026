const jsonBruto = '{"id_voo": "DRN-7742", "data_envio": "2026-04-28", "detalhes": { "altitude_max": 120, "sensores": ["GPS", "Termometro", "Lidar"] }, "pacotes": [ {"peso": 1.2, "descricao": "Medicamentos"}, {"peso": 0.8, "descricao": "Suprimentos"} ] }';
	
	class Main {
		static executar() {
			const dadosSimulados = JSON.parse(jsonBruto);
			console.log("--- Iniciando Sistema de Logistica ---");
			
			// DESAFIO: 
			// 1. Criar a classe Pacote.ts
			// 2. Criar a classe Voo.ts (que contem detalhes e pacotes)
			// 3. Instanciar a classe Voo aqui embaixo:
			
			// const meuVoo = new Voo(dadosSimulados);
			// console.log("Total a transportar: " + meuVoo.getPesoTotal() + "kg");
		}
	}
	
	Main.executar();