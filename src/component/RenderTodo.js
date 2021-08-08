import React, { useState } from "react";
import { Todo } from "./Todo";
import { Todos } from "./Todos";

export const RenderTodo = (props) => {
  const [todos, setTodos] = useState(Todos);
  const [doneTodo, setDoneTodo] = useState([]);
  //const [content, setContent] = useState("");
  const [newtodos, setNewTodos] = useState({
    task: "",
    status: false,
    id: Math.floor(Math.random() * 10000),
  });

  const onTodoChange = (e) => {
    e.preventDefault();
    let text = e.target.value;
    setNewTodos((actual) => {
      return { ...actual, task: text };
    });
  };

  const addTodo = () => {
    const _todos = [...todos];
    _todos.push(newtodos);
    setTodos(_todos);
  };

  const deleteTodo = (index) => {
    const _todos = [...todos];
    _todos.splice(index, 1);
    setTodos(_todos);
  };
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
      deleteTodo={deleteTodo}
      task={item.task}
      id={index}
      status={item.status}
    />
  ));

  return (
    <section>
      <div>
        <form onSubmit={onTodoChange}>
          <input value={newtodos.task} onChange={onTodoChange}></input>
          <button onClick={addTodo}>add</button>
        </form>
      </div>
      <div>{todo}</div>
      <div className='progres'>
        {doneTodo.length}/{todos.length} task done
      </div>
    </section>
  );
};
