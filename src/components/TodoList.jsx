import { useEffect, useState } from "react";
import "./todo.css";
import { TodoItem } from "./TodoItem";
import { AddTodo } from "./AddTodo";

const TodoList = () => {
  const [items, setItems] = useState([]);

  const [doneCount, setDoneCount] = useState(0);

  useEffect(() => {
    const doneItems = items.filter((item) => item.isDone);
    setDoneCount(doneItems.length);
  }, [items]);

  const deleteTodo = (id) => {
    const toBeDeletedIndex = items.findIndex((item) => item.id === id);
    items.splice(toBeDeletedIndex, 1);
    setItems([...items]);
  };

  const addTask = (title) => {
    if (!title) {
      return;
    }
    const newTask = { id: items.length + 1, title, isSDone: false };
    setItems([...items, newTask]);
  };

  const doneTodo = (id) => {
    const todoItem = items.find((item) => item.id === id);
    todoItem.isDone = true;
    setItems([...items]);
  };

  return (
    <div className="container">
      <div >
        <h2 className="heading">Website Todo</h2>
      </div>
      <div>
        <h3 className="heading">Done Task: {doneCount}</h3>
      </div>
      <div className="todo-list shadow-lg">
        <AddTodo addTodo={addTask} />

        {items.map((item) => (
          <TodoItem
            key={item.id}
            title={item.title}
            isDone={item.isDone}
            deleteTodo={() => {
              deleteTodo(item.id);
            }}
            completeTodo={() => {
              doneTodo(item.id);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
