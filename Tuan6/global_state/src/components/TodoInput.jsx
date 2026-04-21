import { useState } from "react";
import { useRecoilState } from "recoil";
import { todosState } from "../recoil/atoms.js";

function TodoInput() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useRecoilState(todosState);

  const handleAdd = () => {
    const value = text.trim();
    if (!value) return;

    setTodos([...todos, { id: Date.now(), text: value }]);
    setText("");
  };

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Nhap todo" />
      <button onClick={handleAdd}>Them</button>
    </div>
  );
}

export default TodoInput;
