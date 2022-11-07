import { Outlet, Link } from "react-router-dom";
import React from "react";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <span> </span>
        <Link to="/todoapp">Todo App</Link>
        <span> </span>
        <Link to="/task">Task</Link>
        <span> </span>
        <Link to="/apirest">Api Rest</Link>
        <span> </span>
        <Link to="/chat">Chat</Link>
        <span> </span>
        <Link to="/launchesapp">LaunchesApp</Link>
      </nav>

      <Outlet />
      <Footer />
    </>
  );
}
