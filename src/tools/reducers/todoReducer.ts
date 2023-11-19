import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../constants";

interface Todo {
  todos: string[];
}

let initialState: Todo = {
  todos: [],
};

const todoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TODO:
      return { todos: [...state.todos, action.payload] };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo, index) => index != action.payload),
      };

    // case UPDATE_TODO:
    //   return {
    //     ...state,
    //     todos: state.todos.map((item, index) => {
    //       return item;
    //     }),
    //   };

    default:
      return state;
  }
};

export default todoReducer;
