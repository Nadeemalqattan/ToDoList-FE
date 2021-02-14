export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const UPDATE_TASK = "UPDATE_TASK";

export const addTask = (newTask) => {
  return {
    type: ADD_TASK,
    payload: { newTask },
  };
};

export const updateTask = (updatedTask) => {
  return {
    type: UPDATE_TASK,
    payload: { updatedTask },
  };
};

export const deleteTask = (taskId) => {
  return {
    type: DELETE_TASK,
    payload: { taskId },
  };
};
