import { createStore } from "redux";
import Reducer from "../reducers";

const store = createStore(
  Reducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
