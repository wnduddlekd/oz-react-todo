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
      <div className="rabel">
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
            id="change-input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="수정할 Todo List 입력"
          />
        )}
      </div>
      <div className="buttons">
        <button id="change-button" onClick={handleClick}>
          <b>수정</b>
        </button>
        <button
          id="remove-button"
          onClick={() => {
            setTodoList((prev) => {
              return prev.filter((el) => el.id !== todo.id);
            });
          }}
        >
          <b>삭제</b>
        </button>
      </div>
    </li>
  );
}
