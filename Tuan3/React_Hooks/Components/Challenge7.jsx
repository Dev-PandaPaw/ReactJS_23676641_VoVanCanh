import { createContext, useContext, useEffect, useMemo, useState } from "react";

const ThemeContext = createContext(null);

const themeStyle = {
  light: {
    background: "#f6f7fb",
    color: "#222",
    card: "#fff",
    border: "#ddd",
  },
  dark: {
    background: "#1f2230",
    color: "#f5f5f5",
    card: "#2d3245",
    border: "#3a4057",
  },
};

function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === "light" ? "dark" : "light"}
    </button>
  );
}

function Card() {
  const { theme } = useContext(ThemeContext);
  const style = themeStyle[theme];

  return (
    <div
      style={{
        background: style.card,
        border: `1px solid ${style.border}`,
        borderRadius: 12,
        padding: 20,
      }}
    >
      <h3>Card component</h3>
      <p>Theme is applied from context at deep level.</p>
      <ThemeButton />
    </div>
  );
}

function Layout() {
  const { theme } = useContext(ThemeContext);
  const style = themeStyle[theme];

  return (
    <div
      style={{
        minHeight: 420,
        background: style.background,
        color: style.color,
        borderRadius: 14,
        padding: 20,
      }}
    >
      <h2>Layout component</h2>
      <Card />
    </div>
  );
}

function Challenge7() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  // bonus: persist theme
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      toggleTheme: () => setTheme((prev) => (prev === "light" ? "dark" : "light")),
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>
      <div style={{ maxWidth: 760, margin: "20px auto" }}>
        <h2>Challenge 7 - Theme Switcher</h2>
        <Layout />
      </div>
    </ThemeContext.Provider>
  );
}

export default Challenge7;
