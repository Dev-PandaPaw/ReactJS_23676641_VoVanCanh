import { useRecoilValue } from "recoil";
import { todosState } from "../recoil/atoms.js";
import TodoItem from "./TodoItem.jsx";

function TodoList() {
  const todos = useRecoilValue(todosState);

  if (todos.length === 0) {
    return <p>Chua co todo</p>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
