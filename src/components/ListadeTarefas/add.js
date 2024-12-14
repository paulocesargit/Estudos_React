import React, { useState } from "react";
import "./style.css";

function ListaDeTarefas() {
  const [tarefa, setTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = () => {
    if (tarefa.trim() !== "") {
      setTarefas([...tarefas, tarefa]);
      setTarefa("");
    }
  };

  return (
    <div className="listaDeTarefas">
      <h1>Lista de Tarefas</h1>
      <input
        type="text"
        value={tarefa}
        onChange={(e) => setTarefa(e.target.value)}
        placeholder="Digite o nome da tarefa"
      />
      <button onClick={adicionarTarefa}>Adicionar</button>

      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDeTarefas;
