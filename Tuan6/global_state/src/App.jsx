import { useRecoilValue } from "recoil";
import CounterActions from "./components/CounterActions.jsx";
import CounterDisplay from "./components/CounterDisplay.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx";
import AuthActions from "./components/AuthActions.jsx";
import UserInfoTop from "./components/UserInfoTop.jsx";
import UserInfoBottom from "./components/UserInfoBottom.jsx";
import TodoInput from "./components/TodoInput.jsx";
import TodoList from "./components/TodoList.jsx";
import { themeState } from "./recoil/atoms.js";

function App() {
  const theme = useRecoilValue(themeState);

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "16px",
        backgroundColor: theme === "dark" ? "#111" : "#fff",
        color: theme === "dark" ? "#fff" : "#111",
      }}
    >
      <h1>Tuan6 - Global State</h1>

      {/* <h2>Bai 1</h2>
      <CounterDisplay />
      <CounterActions /> */}

      {/* <h2>Bai 2</h2>
      <ThemeToggle /> */}

      {/* <h2>Bai 3</h2>
      <UserInfoTop />
      <AuthActions />
      <UserInfoBottom /> */}

      <h2>Bai 4</h2>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
