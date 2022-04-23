import { ReactNode, useContext, useEffect, useState } from "react";
import ThemeContext from "./ThemeContext";

const defaultTheme = "light";

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(defaultTheme);
  const toggleTheme = () => {
    setTheme(theme === defaultTheme ? "dark" : defaultTheme);
    localStorage.setItem(
      "theme",
      theme === defaultTheme ? "dark" : defaultTheme
    );
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export default ThemeProvider;
