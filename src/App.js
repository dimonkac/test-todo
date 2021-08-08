import React from "react";
import "./App.css";
import { RenderTodo } from "./component/RenderTodo";

function App() {
  return (
    <div className='App'>
      <h1>TODOLIST</h1>
      <RenderTodo />
    </div>
  );
}

export default App;
