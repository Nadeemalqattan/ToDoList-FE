import tasksData from "../tasks";
import { ADD_TASK, DELETE_TASK, UPDATE_TASK } from "./actions";

const initialState = {
  tasks: tasksData,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const { newTask } = action.payload;
      state.task.length === 0
        ? (newTask.id = 1)
        : (newTask.id = state.tasks[state.tasks.length - 1].id + 1);
      newTask.list = "unfinished";
      return {
        ...state,
        tasks: [...state.tasks, newTask],
      };

    case UPDATE_TASK:
      const { updatedTask } = action.payload;
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === updatedTask.id ? updatedTask : task
        ),
      };

    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.taskId),
      };

    default:
      return state;
  }
};

export default reducer;
