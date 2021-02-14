import { useSelector } from "react-redux";

const TasksList = () => {
  const tasks = useSelector((state) => state.tasks);

  const tasksList = tasks.map((task) => (
    <div key={task.id}>
      <h3>{task.name}</h3>
      <h3>{task.status}</h3>
      <h3>{task.priority}</h3>
      <h3>{task.date}</h3>
    </div>
  ));
  return <div>{tasksList}</div>;
};

export default TasksList;
