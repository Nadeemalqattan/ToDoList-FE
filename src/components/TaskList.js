import Task from "./Task";

const TaskList = ({ list }) => {
  return (
    <>
      {list.map((task) => {
        return <Task key={task.id} task={task} />;
      })}
    </>
  );
};

export default TaskList;
