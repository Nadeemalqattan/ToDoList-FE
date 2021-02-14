import axios from "axios";

export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const UPDATE_TASK = "UPDATE_TASK";
export const FETCH_TASKS = "FETCH_TASKS";

export const fetchTasks = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:8000/");
      dispatch({
        type: FETCH_TASKS,
        payload: res.data,
      });
    } catch (error) {
      console.log("error: ", error);
    }
  };
};

export const addTask = (newTask) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:8000/", newTask);
    dispatch({
      type: ADD_TASK,
      payload: { newTask: res.data },
    });
  } catch (error) {
    console.log("error: ", error);
  }
};

export const updateTask = (updatedTask) => async (dispatch) => {
  try {
    await axios.put(`http://localhost:8000/${updatedTask.id}`, updatedTask);
    dispatch({
      type: UPDATE_TASK,
      payload: { updatedTask },
    });
  } catch (error) {
    console.log("error: ", error);
  }
};

export const deleteTask = (taskId) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:8000/${taskId}`);
    dispatch({
      type: DELETE_TASK,
      payload: { taskId },
    });
  } catch (error) {
    console.log("error: ", error);
  }
};
