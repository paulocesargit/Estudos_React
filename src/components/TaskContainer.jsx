import React from "react";
import Task from "./Task";

function TaskContainer() {
  const tasks = [
    {
      id: 1,
      title: "Reunião de Planejamento",
      description: "Planejar as metas da semana",
    },
    {
      id: 2,
      title: "Análise de Dados",
      description: "Revisar o relatório mensal",
    },
    {
      id: 3,
      title: "Atualizar Documentação",
      description: "Revisar o manual do usuário",
    },
    {
      id: 4,
      title: "Entrega de Projeto",
      description: "Enviar o projeto para aprovação",
    },
    {
      id: 5,
      title: "Revisão de Código",
      description: "Verificar os PRs pendentes",
    },
    {
      id: 6,
      title: "Estudo de Mercado",
      description: "Analisar tendências do setor",
    },
    {
      id: 7,
      title: "Configuração de Ambiente",
      description: "Preparar o ambiente de desenvolvimento",
    },
    {
      id: 8,
      title: "Teste de Funcionalidades",
      description: "Testar as novas implementações",
    },
    {
      id: 9,
      title: "Contato com Cliente",
      description: "Alinhar expectativas do projeto",
    },
    {
      id: 10,
      title: "Atualização de Status",
      description: "Reportar andamento da equipe",
    },
    {
      id: 11,
      title: "Sessão de Treinamento",
      description: "Capacitar novos colaboradores",
    },
    {
      id: 12,
      title: "Organização de Arquivos",
      description: "Classificar e ordenar documentos",
    },
    {
      id: 13,
      title: "Backup do Sistema",
      description: "Realizar o backup semanal",
    },
    {
      id: 14,
      title: "Criação de Proposta",
      description: "Elaborar proposta comercial",
    },
    {
      id: 15,
      title: "Preparação para Apresentação",
      description: "Finalizar slides e conteúdo",
    },
    {
      id: 16,
      title: "Atualização de Sistema",
      description: "Aplicar patch de segurança",
    },
  ];
  return (
    <div className="task-container">
      {tasks.map((task) => (
        <Task key={task.id} title={task.title} description={task.description} />
      ))}
    </div>
  );
}

export default TaskContainer;
