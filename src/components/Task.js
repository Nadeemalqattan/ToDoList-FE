import { useState } from "react";
import DeleteButton from "./Buttons/DeleteButton";
import UpdateButton from "./Buttons/UpdateButton";
import { FcLowPriority } from "react-icons/fc";

const Task = ({ task }) => {
  //   const [priority, setPriority] = useState(task.priority);
  const currDate = new Date();
  const deadlineDate = new Date(task.deadline);

  const days_difference =
    deadlineDate.getTime() / (1000 * 60 * 60 * 24) -
    currDate.getTime() / (1000 * 60 * 60 * 24);

  // const priorityIcon = () => {
  //     if (task.priority === "Low" ) {
  //         <FcLowPriority />
  //     }
  // }

  return (
    <div>
      <div key={task.id}>
        <h3>{task.name}</h3>
        <h3>{task.status}</h3>
        <h3>{task.priority}</h3>
        <h3>{task.deadline}</h3>
        <h3>{`In ${Math.floor(days_difference)} Days`}</h3>
      </div>
      <div>
        <span>
          <UpdateButton task={task} />
          <DeleteButton taskId={task.id} />
        </span>
      </div>
    </div>
  );
};
export default Task;
