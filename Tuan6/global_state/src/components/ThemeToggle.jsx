import { useRecoilState } from "recoil";
import { themeState } from "../recoil/atoms.js";

function ThemeToggle() {
  const [theme, setTheme] = useRecoilState(themeState);

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Theme: {theme}
    </button>
  );
}

export default ThemeToggle;
