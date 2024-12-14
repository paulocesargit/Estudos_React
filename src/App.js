import "./App.css";
import ListaDeTarefas from "./components/ListadeTarefas/add";
import Header from "./components/Header/Header";
import TaskContainer from "./components/Task/TaskContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <TaskContainer />
      <ListaDeTarefas />
    </div>
  );
}

export default App;
