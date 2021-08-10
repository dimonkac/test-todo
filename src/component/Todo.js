import React, { useRef, useState } from "react";
import "./style.css";

export const Todo = (props) => {
  const [title, setTitle] = useState(props.task);
  const titleRef = useRef("");

  const handleClick = (e) => {
    titleRef.current.innerText = title;
    setTitle(prompt("press enter todo", title));
  };

  const deleteTodo = (index) => {
    const _title = [...title];
    _title.splice(index, 1);
    setTitle(_title);
    console.log(title);
  };

  return (
    <div className='todo_cart'>
      <input
        onClick={props.onChangeStatus(props.id)}
        type='checkbox'
        checked={props.status ? true : false}
      />
      <h4
        className={props.status ? "done" : "undone"}
        onClick={handleClick}
        ref={titleRef}>
        {/* пропсы - {props.task}; */}
        измененные - {title}
      </h4>
      <button
        onClick={() => {
          deleteTodo(props.id);
        }}>
        delete
      </button>
    </div>
  );
};
