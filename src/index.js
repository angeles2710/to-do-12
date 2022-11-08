import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./layout/Home";
import ApiRest from "./apis/ApiRest";
import TodoApp from "./todo/TodoApp";
import Task from "./todo/Task";
import NoPage from "./layout/NoPage";
import Chat from "./chat/Chat";
import LaunchesApp from "./apis/LaunchesApp";
import ToDoN from "./todo/ToDoN";
import Opc1 from "./todo/Opc1";

import "./styles.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="apirest" element={<ApiRest />} />
          <Route path="todoapp" element={<TodoApp />} />
          <Route path="task" element={<Task />} />
          <Route path="chat" element={<Chat />} />
          <Route path="launchesApp" element={<LaunchesApp />} />
          <Route path="todoN" element={<ToDoN />} />
          <Route path="opc1" element={<Opc1 />} />          
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
