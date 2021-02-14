import { useSelector } from "react-redux";

const TaskList = ({ list }) => {
  const tasks = useSelector((state) => state.tasks);

  const taskList = tasks.map((task) => (
    <div key={task.id}>
      <h3>{task.name}</h3>
      <h3>{task.status}</h3>
      <h3>{task.priority}</h3>
      <h3>{task.date}</h3>
    </div>
  ));
  return <div>{taskList}</div>;
};

export default TaskList;
