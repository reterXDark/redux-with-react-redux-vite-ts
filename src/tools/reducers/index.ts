import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import hideReducer from "./hideReducer";
import todoReducer from "./todoReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  hide: hideReducer,
  todo: todoReducer,
});

export default rootReducer;
