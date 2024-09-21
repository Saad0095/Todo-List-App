import React, { useState, useRef } from "react";
import "./todo.css";

export const AddTodo = ({ addTodo }) => {
  const [newTask, setNewTask] = useState("");
  const addButtonRef = useRef(null); 

  const onChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addButtonRef.current.click(); 
    }
  };

  return (
    <div className="add-todo">
      <input
        className="input-field"
        type="text"
        placeholder="Enter the task title"
        value={newTask}
        onChange={onChange}
        onKeyDown={handleKeyPress} 
      />
      <button
        ref={addButtonRef} 
        className="todo-add-btn rounded-md"
        onClick={() => {
          addTodo(newTask);
          setNewTask("");
        }}
      >
        + New Task
      </button>
    </div>
  );
};
