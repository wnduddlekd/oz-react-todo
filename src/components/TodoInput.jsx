import { useState } from "react";

export default function TodoInput({ todoList, setTodoList }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      add todo
      <input
        id="add-input"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button
        id="input-button"
        onClick={() => {
          const newTodo = {
            id: Number(new Date()),
            content: inputValue,
            checked: false,
          };
          const newTodoList = [...todoList, newTodo];
          setTodoList(newTodoList);
          setInputValue("");
        }}
      >
        <b>추가하기</b>
      </button>
    </>
  );
}
