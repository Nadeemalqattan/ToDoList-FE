import { useDispatch } from "react-redux";
import { deleteTask } from "../../store/actions";

const DeleteButton = ({ taskId }) => {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      className="btn btn-danger"
      onClick={() => dispatch(deleteTask(taskId))}
    >
      Delete
    </button>
  );
};

export default DeleteButton;
