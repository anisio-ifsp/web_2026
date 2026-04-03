import { Contato } from "./Contato";
import { Endereco } from "./Endereco";
import { Medico } from "./Medico";
import { Paciente } from "./Paciente";
import { Pessoa } from "./Pessoa";
import { Prontuario } from "./Prontuario";
import { Remedio } from "./Remedio";

const enderecoPaciente = new Endereco("Rua das Flores", 123, "Boituva", "18550-000");
const contatoPaciente = new Contato("15-99999-8888", "paciente@email.com");
const pessoaPaciente = new Pessoa("Carlos Silva", 45, enderecoPaciente, contatoPaciente);


const remedios = [
  new Remedio("Estude+", "500mg"),
  new Remedio("Amoxicilina", "875mg")
];
const paciente = new Paciente(pessoaPaciente, remedios);


const enderecoMedico = new Endereco("Av. Central", 456, "Boituva", "18550-001");
const contatoMedico = new Contato("15-98888-7777", "medico@email.com");
const pessoaMedico = new Pessoa("Dra. Maria Oliveira", 38, enderecoMedico, contatoMedico);

const medico = new Medico(pessoaMedico, "Clínico Geral");

const prontuario = new Prontuario(paciente, medico);

prontuario.exibirProntuario();