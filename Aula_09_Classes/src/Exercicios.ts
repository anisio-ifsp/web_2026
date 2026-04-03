// EX 01
class Livro {
  titulo: string
  autor: string
  anoPublicacao: number
  editora: string

  constructor(titulo: string, autor: string, anoPublicacao: number, editora: string) {
    this.titulo = titulo
    this.autor = autor
    this.anoPublicacao = anoPublicacao
    this.editora = editora
  }

  exibirDados(): void {
    console.log(`Título: ${this.titulo}, Autor: ${this.autor}, Ano: ${this.anoPublicacao}, Editora: ${this.editora}`)
  }
}


// EX 02
const livro1 = new Livro("Dom Casmurro", "Machado de Assis", 1899, "Editora Garnier")
const livro2 = new Livro("O Hobbit", "J.R.R. Tolkien", 1937, "Allen & Unwin")

livro1.exibirDados()
livro2.exibirDados()

// EX 03
class Usuario {
  nome: string
  email: string

  constructor(nome: string, email: string) {
    this.nome = nome
    this.email = email
  }

  boasVindas(): void {
    console.log(`Bem-vindo(a), ${this.nome}! Seu e-mail é ${this.email}.`)
  }
}

const usuario1 = new Usuario("Ana", "ana@email.com")
usuario1.boasVindas()

//EX 04
class Carro {
  marca: string
  modelo: string
  ano: number

  constructor(marca: string, modelo: string, ano: number) {
    this.marca = marca
    this.modelo = modelo
    this.ano = ano
  }

  mostrarCarro(): void {
    console.log(`Carro: ${this.marca} ${this.modelo}, Ano: ${this.ano}`)
  }
}

const carro1 = new Carro("Toyota", "Corolla", 2020)
carro1.mostrarCarro()

carro1.ano = 2022
carro1.mostrarCarro()

//EX 05
export class Produto {
  nome: string
  preco: number

  constructor(nome: string, preco: number) {
    this.nome = nome
    this.preco = preco
  }

  mostrarInformacoes(): void {
    console.log(`Produto: ${this.nome}, Preço: R$${this.preco}`)
  }
}

const prod = new Produto("Notebook", 3500)
prod.mostrarInformacoes()
