import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../constants";

const addtodo = (data: string) => {
  return {
    type: ADD_TODO,
    payload: data,
  };
};

const deletetodo = (indexToDelete: number) => {
  return {
    type: DELETE_TODO,
    payload: indexToDelete,
  };
};

const updateTodo = (indexToUpdate: number) => {
  return {
    type: UPDATE_TODO,
    payload: indexToUpdate,
  };
};

export { addtodo, deletetodo, updateTodo };
