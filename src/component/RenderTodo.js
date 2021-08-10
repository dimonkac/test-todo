import React, { useState } from "react";
import { Todo } from "./Todo";
import { Todos } from "./Todos";

export const RenderTodo = (props) => {
  const [todos, setTodos] = useState(Todos);
  const [doneTodo, setDoneTodo] = useState([]);
  //const [content, setContent] = useState("");
  const [newtodos, setNewTodos] = useState("");

  const addTodo = () => {
    const newTodo = {
      task: newtodos,
      status: false,
      id: Math.floor(Math.random() * 10000),
    };
    setTodos([...todos, newTodo]);
    setNewTodos("");
  };

  // const deleteTodo = (index) => {
  //   const _todos = [...todos];
  //   _todos.splice(index, 1);
  //   setTodos(_todos);
  // };
  const lengthDoneTodo = () => {
    const length = todos.filter((todo) => todo.status);
    console.log(length);
    setDoneTodo(length);
  };

  const onChangeStatus = (index) => () => {
    const _todos = [...todos];
    _todos[index].status = !_todos[index].status;
    setTodos(_todos);
    lengthDoneTodo();
  };
  //debugger;

  const todo = todos.map((item, index) => (
    <Todo
      onChangeStatus={onChangeStatus}
      //deleteTodo={deleteTodo}
      task={item.task}
      id={index}
      status={item.status}
    />
  ));

  return (
    <section>
      <div>
        <input
          value={newtodos}
          onChange={(e) => setNewTodos(e.target.value)}></input>
        <button onClick={addTodo}>add</button>
      </div>
      <div>{todo}</div>
      <div className='progres'>
        {doneTodo.length}/{todos.length} task done
      </div>
    </section>
  );
};
