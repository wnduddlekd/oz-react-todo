import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

export default function App() {
  const [todoList, setTodoList] = useState([
    { id: 0, content: "123", checked: false },
    { id: 1, content: "코딩 공부하기", checked: false },
    { id: 2, content: "잠 자기", checked: false },
  ]);

  return (
    <>
      <TodoList todoList={todoList} setTodoList={setTodoList} />
      <hr />
      <TodoInput todoList={todoList} setTodoList={setTodoList} />
    </>
  );
}
