import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todosState } from "../recoil/atoms.js";

function TodoItem({ todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const setTodos = useSetRecoilState(todosState);

  const handleDelete = () => {
    setTodos((prev) => prev.filter((item) => item.id !== todo.id));
  };

  const handleSave = () => {
    const value = editText.trim();
    if (!value) return;

    setTodos((prev) => prev.map((item) => (item.id === todo.id ? { ...item, text: value } : item)));
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <li>
        <input value={editText} onChange={(e) => setEditText(e.target.value)} />
        <button onClick={handleSave}>Luu</button>
      </li>
    );
  }

  return (
    <li>
      {todo.text}
      <button onClick={() => setIsEditing(true)}>Sua</button>
      <button onClick={handleDelete}>Xoa</button>
    </li>
  );
}

export default TodoItem;
