import { useState } from "react";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 0, content: "123" },
    { id: 1, content: "코딩 공부하기" },
    { id: 2, content: "잠 자기" },
  ]);

  return (
    <>
      <TodoList todoList={todoList} setTodoList={setTodoList} />
      <hr />
      <TodoInput todoList={todoList} setTodoList={setTodoList} />
    </>
  );
}

function TodoInput({ todoList, setTodoList }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <input
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button
        onClick={() => {
          const newTodo = { id: Number(new Date()), content: inputValue };
          const newTodoList = [...todoList, newTodo];
          setTodoList(newTodoList);
          setInputValue("");
        }}
      >
        추가하기
      </button>
    </>
  );
}

function TodoList({ todoList, setTodoList }) {
  return (
    <ul>
      {todoList.map((todo) => (
        <Todo key={todo.id} todo={todo} setTodoList={setTodoList} />
      ))}
    </ul>
  );
}

function Todo({ todo, setTodoList }) {
  const [inputValue, setInputValue] = useState("");
  const [showInput, setShowInput] = useState(false);

  const handleToggle = () => {
    if (showInput) {
      if (inputValue) {
        setTodoList((prev) =>
          prev.map((el) =>
            el.id === todo.id ? { ...el, content: inputValue } : el
          )
        );
        setInputValue("");
        setShowInput(false);
      } else {
        setShowInput(false);
      }
    } else {
      setShowInput(true);
    }
  };
  return (
    <li>
      {todo.content}
      {showInput && (
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="수정할 Todo List 입력"
        />
      )}
      <button onClick={handleToggle}>수정</button>
      <button
        onClick={() => {
          setTodoList((prev) => {
            return prev.filter((el) => el.id !== todo.id);
          });
        }}
      >
        삭제
      </button>
    </li>
  );
}

export default App;
