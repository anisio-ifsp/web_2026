	import { Endereco } from "./Endereco"
	
	export class Fabricante {
		nome: string
		endereco: Endereco
		
		constructor(nome: string, endereco: Endereco) {
			this.nome = nome
			this.endereco = endereco
		}
	}