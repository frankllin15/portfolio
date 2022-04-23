import { createContext } from "react";

type ThemeContext = {
  theme: string;
  toggleTheme: () => void;
};

const context = createContext<ThemeContext>({ theme: "light" } as ThemeContext);

export default context;
