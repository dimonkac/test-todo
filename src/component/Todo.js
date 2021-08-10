import React, { useRef, useState, useEffect } from "react";
import "./style.css";

export const Todo = (props) => {
  const [title, setTitle] = useState(props.task);
  const titleRef = useRef("");

  const handleClick = (e) => {
    titleRef.current.innerText = title;
    setTitle(prompt("press enter todo", title));
  };

  useEffect(() => {
    setTitle(props.task);
  }, [props.task]);

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
        {/* {props.task} */}
        {title}
      </h4>
      <button
        onClick={() => {
          props.deleteTodo(props.id);
        }}>
        delete
      </button>
    </div>
  );
};
