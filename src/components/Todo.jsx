import { useState } from "react";

export default function Todo({ todo, setTodoList }) {
  const [inputValue, setInputValue] = useState("");
  const [showInput, setShowInput] = useState(false);

  const handleClick = () => {
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
      <input
        type="checkbox"
        checked={todo.checked}
        onChange={() =>
          setTodoList((prev) =>
            prev.map((el) =>
              el.id === todo.id ? { ...el, checked: !el.checked } : el
            )
          )
        }
      />
      {todo.content}
      {showInput && (
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="수정할 Todo List 입력"
        />
      )}
      <button onClick={handleClick}>수정</button>
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
