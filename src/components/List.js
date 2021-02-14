import { useSelector } from "react-redux";
import TaskList from "./TaskList";

const TaskStatus = () => {
  const allTasks = useSelector((state) => state.tasks);

  const unfinishedlist = allTasks.filter(
    (task) => task.status === "Unfinished"
  );

  const finishedlist = allTasks.filter((task) => task.status === "Finished");
  return (
    <>
      <div>
        <h2>{`Unfinished Tasks`}</h2>
        <hr />
        <TaskList list={unfinishedlist} />
      </div>
      <div>
        <h2>{`Finished Tasks`}</h2>
        <hr />
        <TaskList list={finishedlist} />
      </div>
    </>
  );
};

export default TaskStatus;
