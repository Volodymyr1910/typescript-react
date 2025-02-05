import { createContext, useState, ReactNode } from "react";

//  Описуємо тип для контексту
interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

//  Створюємо контекст із початковим значенням `null`
export const ThemeContext = createContext<ThemeContextType | null>(null);

interface ThemeProviderProps {
  children: ReactNode;
}

//  Створюємо провайдер
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<string>("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};