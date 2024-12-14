import "./App.css";
import Header from "./components/Header/Header";
import TaskContainer from "./components/Task/TaskContainer";
import Scripts from "./components/toggle button/script";

function App() {
  return (
    <div className="App">
      <Header /> <Scripts />
      <TaskContainer />
    </div>
  );
}

export default App;
