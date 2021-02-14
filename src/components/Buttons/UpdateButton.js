import { useDispatch } from "react-redux";
import { updateTask } from "../../store/actions";

const UpdateButton = ({ task }) => {
  const dispatch = useDispatch();

  const _task = {
    id: task.id,
    name: task.name,
    status: task.status === "Unfinished" ? "Finished" : "Unfinished",
  };

  const buttonView = () =>
    task.list === "Unfinished" ? "Finished" : "Unfinished";

  return (
    <button
      type="button"
      className="btn btn-primary"
      onClick={() => dispatch(updateTask(_task))}
    >
      {buttonView()}
    </button>
  );
};

export default UpdateButton;
