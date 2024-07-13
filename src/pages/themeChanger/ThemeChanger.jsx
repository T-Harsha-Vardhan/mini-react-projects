import { useEffect, useState } from "react";
import "./theme-changer.css";

const ThemeChanger = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className={theme}>
      <p>Hello World</p>
      <button onClick={handleTheme}>Change Theme</button>
    </div>
  );
};

export default ThemeChanger;
