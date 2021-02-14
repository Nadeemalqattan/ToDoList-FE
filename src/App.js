import "./App.css";
import TaskForm from "./components/TaskForm";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <h1>To Do List</h1>
      <TaskForm />
      <List />
    </div>
  );
}

export default App;
