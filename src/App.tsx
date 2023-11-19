import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./tools/actions/counterActions";
import { hide, unhide } from "./tools/actions/hideActions";
import { addtodo, deletetodo } from "./tools/actions/todoActions";
import { motion } from "framer-motion";

function App() {
  const [todoString, setTodoString] = useState("");

  const count = useSelector((state: any) => state.counter.count);
  const visibility = useSelector((state: any) => state.hide.visibility);
  const todos = useSelector((state: any) => state.todo.todos);
  const dispatch = useDispatch();

  const items = ["sds", "gerg"];

  useEffect(() => {
    console.log(todoString);
  }, [todos, todoString]);

  return (
    <div className="App">
      <h1>Todo List</h1>

      <button
        onClick={() => {
          visibility ? dispatch(hide()) : dispatch(unhide());
        }}
      >
        {visibility ? "Hide" : "Show"}
      </button>
      {visibility && (
        <div className="card">
          <button disabled>count is {count}</button>
          <br />

          <button onClick={() => dispatch(increment())}>+</button>

          <button onClick={() => dispatch(decrement())}>-</button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
      )}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <div>
        <input
          type={"text"}
          placeholder="Add todo"
          value={todoString}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setTodoString(event.target.value);
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              setTodoString("");
              dispatch(addtodo(todoString));
            }
          }}
        />
        <br />
        <button
          style={{ marginTop: 5 }}
          onClick={() => {
            setTodoString("");
            dispatch(addtodo(todoString));
          }}
          disabled={todoString === "" ? true : false}
        >
          Add Todo
        </button>
      </div>

      <div>
        {todos?.length !== 0 ? (
          todos?.map((item: any, index: any) => (
            <motion.div
              className="todo"
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5, bounce: "" }}
            >
              <p className="">{item}</p>
              <button
                onClick={() => {
                  // setTodoString("");
                  dispatch(deletetodo(index));
                }}
              >
                Remove
              </button>
            </motion.div>
          ))
        ) : (
          <motion.div
            key={1}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5, bounce: "" }}
          >
            <p className="">Todos Empty 🥴</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default App;
