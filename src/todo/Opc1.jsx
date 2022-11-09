import React from "react";
import { useState, useReducer } from "react";

export default function Opc1() {
  // Initialize a userId variable with its setter function via a hook
  const [userId, setUserId] = useState("");
  const [usernameTable, setUsernameTable] = useState("");
  const [fakeTodoTable, setFakeTodoTable] = useState("");

  function handleUserIdTable(userId) {
    if (userId !== "") {
      // Compose the items' table here!!
      const itemsTable = (
        <>
          <ul>{userId} item 1</ul>
          <ul>{userId} item 2</ul>
          <ul>{userId} item 3</ul>
        </>
      );
      setUsernameTable(itemsTable);
    }
  }

  // useReducer example
  // Const initialization
  let nextId = 3;
  const initialTasks = [
    { id: 0, text: "Visit Kafka Museum", done: true },
    { id: 1, text: "Watch a puppet show", done: false },
    { id: 2, text: "Lennon Wall pic", done: false }
  ];

  // AddTask functions
  function AddTask({ onAddTask }) {
    const [text, setText] = useState("");
    return (
      <>
        <input
          placeholder="Add task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          onClick={() => {
            setText("");
            onAddTask(text);
          }}
        >
          Add
        </button>
      </>
    );
  }

  // TaskList and Tasks functions
  function tasksReducer(tasks, action) {
    switch (action.type) {
      case "added": {
        return [
          ...tasks,
          {
            id: action.id,
            text: action.text,
            done: false
          }
        ];
      }
      case "changed": {
        return tasks.map((t) => {
          if (t.id === action.task.id) {
            return action.task;
          } else {
            return t;
          }
        });
      }
      case "deleted": {
        return tasks.filter((t) => t.id !== action.id);
      }
      default: {
        throw Error("Unknown action: " + action.type);
      }
    }
  }

  function TaskList({ tasks, onChangeTask, onDeleteTask }) {
    return (
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
          </li>
        ))}
      </ul>
    );
  }

  function Task({ task, onChange, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    let taskContent;
    if (isEditing) {
      taskContent = (
        <>
          <input
            value={task.text}
            onChange={(e) => {
              onChange({
                ...task,
                text: e.target.value
              });
            }}
          />
          <button onClick={() => setIsEditing(false)}>Save</button>
        </>
      );
    } else {
      taskContent = (
        <>
          {task.text}
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      );
    }
    return (
      <label>
        <input
          type="checkbox"
          checked={task.done}
          onChange={(e) => {
            onChange({
              ...task,
              done: e.target.checked
            });
          }}
        />
        {taskContent}
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </label>
    );
  }

  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  function handleAddTask(text) {
    dispatch({
      type: "added",
      id: nextId++,
      text: text
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: "changed",
      task: task
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: "deleted",
      id: taskId
    });
  }

  function printTodoTable(userId) {
    var fakeTodoList = "";
    if (userId !== "") {
      // TODO: Insert logic to compose real todo table
      fakeTodoList = (
        <>
          <h1>Prague itinerary</h1>
          <AddTask onAddTask={handleAddTask} />
          <TaskList
            tasks={tasks}
            onChangeTask={handleChangeTask}
            onDeleteTask={handleDeleteTask}
          />
        </>
      );
    }
    setFakeTodoTable(fakeTodoList);
  }

  // Render
  return (
    <>
      <h1>List To Do</h1>
      <p>User Id</p>
      <input
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <p>{userId}</p>
      <button type="button" onClick={() => handleUserIdTable(userId)}>
        Connect
      </button>
      <>{usernameTable}</>
      <button type="button" onClick={() => printTodoTable(userId)}>
        Print Todo Table
      </button>
      <>{fakeTodoTable}</>
    </>
  );
}
