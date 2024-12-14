import React, { useState } from "react";
import Task from "./Task";
import ToggleButton from "../Button/Button";
import Contador from "../Contador/Contador";

function ListaDeTarefas({ onAddTask }) {
  const [newTask, setNewTask] = useState("");

  const adicionarTarefas = () => {
    if (newTask.trim()) {
      onAddTask(newTask.trim());
      setNewTask("");
    }
  };

  return (
    <div className="lista-de-tarefas">
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Digite o nome da tarefa"
        className="input-tarefa"
      />
      <button onClick={adicionarTarefas} className="botao-adicionar">
        Adicionar
      </button>
    </div>
  );
}

function TaskContainer() {
  const [tasks, setTasks] = useState([]);
  const [todasTarefas, selecTodasTarefas] = useState(true);

  const filteredTasks = todasTarefas
    ? tasks
    : tasks.filter((task) => task.title.includes("Importante"));

  const toggleTaskView = () => {
    selecTodasTarefas(!todasTarefas);
  };

  const addTask = (taskTitle) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: prevTasks.length + 1, title: taskTitle, description: "" },
    ]);
  };

  return (
    <div>
      <ToggleButton onClick={toggleTaskView} isShowingAll={todasTarefas} />
      <Contador />
      <ListaDeTarefas onAddTask={addTask} />
      <div className="task-container">
        {filteredTasks.map((task) => (
          <Task
            key={task.id}
            title={task.title}
            description={task.description}
          />
        ))}
      </div>
    </div>
  );
}

export default TaskContainer;
