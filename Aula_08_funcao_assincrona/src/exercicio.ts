type Tarefa = { };

const tarefas: Tarefa[] = [
    { descricao: "Fazer relatório", prioridade: 2, concluida: false },
    { descricao: "Enviar e-mail", prioridade: 3, concluida: false },
    { descricao: "Reunião com equipe", prioridade: 1, concluida: false }
];

export function imprimirTarefa(descricao: string, indice: number, totalTarefas: number): void {
    console.log(`Tarefa concluída: ${descricao}`);\
    console.log(`Progresso: ${indice + 1}/${totalTarefas}`);
}




executarTarefas(tarefas, imprimirTarefa, 1500);