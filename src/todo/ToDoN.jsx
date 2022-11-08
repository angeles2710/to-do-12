import React, { useReducer, useContext } from "react";

const initialTodos = [
  {
    id: 1,
    text: "lean how to comunicate",
    completed: true,
    author: "Faby",
    due: 1 / 5 / 2022
  },
  {
    id: 2,
    text: "road out of hell",
    complete: false,
    author: "Alex",
    due: 1 / 6 / 2022
  }
];

function appReducer(state, action) {
  switch (action.type) {
    case "reset": {
      return action.payload;
    }
    case "add": {
      return [
        ...state,
        {
          id: Date.now(),
          text: "",
          author: "",
          due: "",
          completed: false
        }
      ];
    }
    case "delete": {
      return state.filter((item) => item.id !== action.payload);
    }
    case "completed": {
      return state.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      });
    }
    default: {
      return state;
    }
  }
}

const Context = React.createContext();

export default function TodoN() {
  const [state, dispatch] = useReducer(appReducer, initialTodos);

  return (
    <Context.Provider value={dispatch}>
      <h2>List To Do</h2>
      <p>User Id: xxxxxxx</p>

      <button onClick={() => dispatch({ type: "add" })}>Add new task</button>
      <br />
      <br />

      <p>** poner títulos columnas?? </p>
      <TodosList items={state} />
    </Context.Provider>
  );
}

function TodosList({ items }) {
  return items.map((item) => <TodoItem key={item.id} {...item} />);
}

function TodoItem({ id, completed, author, text, due }) {
  const dispatch = useContext(Context);
  return (
    <div>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch({ type: "completed", payload: id })}
      />
      <input type="text" defaultValue={text} />
      <input type="text" defaultValue={author} />
      <input type="date" defaultValue={due} />

      <button onClick={() => dispatch({ type: "delete", payload: id })}>
        Delete
      </button>
    </div>
  );
}
