import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskStatus from "./components/TaskStatus";

function App() {
  return (
    <div className="App">
      <h1>To Do List</h1>
      <TaskForm />
      <TaskStatus />
    </div>
  );
}

export default App;
