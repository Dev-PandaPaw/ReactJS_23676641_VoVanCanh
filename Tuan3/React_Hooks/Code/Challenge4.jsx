import { memo, useCallback, useState } from "react";

const TodoItem = memo(function TodoItem({ item, onToggle, onDelete }) {
  console.log("render item", item.id);

  return (
    <li style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
      <label style={{ textDecoration: item.done ? "line-through" : "none" }}>
        <input
          type="checkbox"
          checked={item.done}
          onChange={() => onToggle(item.id)}
          style={{ marginRight: 8 }}
        />
        {item.text}
      </label>
      <button onClick={() => onDelete(item.id)}>Delete</button>
    </li>
  );
});

const TodoList = memo(function TodoList({ todos, onToggle, onDelete }) {
  return (
    <ul style={{ maxHeight: 300, overflow: "auto", padding: 0, listStyle: "none" }}>
      {todos.map((item) => (
        <TodoItem key={item.id} item={item} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  );
});

function TodoInput({ onAdd }) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    const value = text.trim();
    if (!value) return;
    onAdd(value);
    setText("");
  };

  return (
    <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nhap todo..."
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

function Challenge4() {
  const [todos, setTodos] = useState(() =>
    Array.from({ length: 300 }, (_, i) => ({
      id: i + 1,
      text: `Todo item ${i + 1}`,
      done: false,
    }))
  );

  const onAdd = useCallback((text) => {
    setTodos((prev) => [{ id: Date.now(), text, done: false }, ...prev]);
  }, []);

  const onDelete = useCallback((id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const onToggle = useCallback((id) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, done: !item.done } : item))
    );
  }, []);

  return (
    <div style={{ maxWidth: 700, margin: "20px auto" }}>
      <h2>Challenge 4 - Todo List Performance</h2>
      <p>Total todos: {todos.length}</p>

      <TodoInput onAdd={onAdd} />
      <TodoList todos={todos} onToggle={onToggle} onDelete={onDelete} />
    </div>
  );
}

export default Challenge4;
