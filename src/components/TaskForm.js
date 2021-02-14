import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/actions";

const TaskForm = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState({
    name: "",
    status: "",
    priority: "",
    data: "",
  });

  const handleChange = (event) => {
    setTask({ ...task, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTask(task));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div class="form-group">
        <label>Task Name</label>
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="Task Name..."
          onChange={handleChange}
        />
      </div>
      <div class="form-group">
        <label>Task Status</label>
        <input
          type="text"
          className="form-control"
          name="status"
          placeholder="Task Done / Not Done"
          onChange={handleChange}
        />
      </div>
      <div class="form-group">
        <label>Example select</label>
        <input
          type="text"
          className="form-control"
          name="priority"
          placeholder="High, Medium, Low"
          onChange={handleChange}
        />
      </div>
      <div class="form-group">
        <label>Deadline Date</label>
        <input
          type="text"
          className="form-control"
          name="date"
          placeholder="mm/dd/year"
          onChange={handleChange}
        />
      </div>
      <div className="input-group-append">
        <button className="btn btn-outline-secondary" type="submit">
          add
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
