import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const ThemeToggle = () => {
    const context = useContext(ThemeContext);
  
    if (!context) {
      throw new Error("ThemeToggle must be used within a ThemeProvider");
    }
  
    const { theme, toggleTheme } = context;
  
    return (
      <button
        onClick={toggleTheme}
        style={{
          padding: "10px 20px",
          backgroundColor: theme === "light" ? "#fff" : "#333",
          color: theme === "light" ? "#000" : "#fff",
          border: "none",
          cursor: "pointer",
          borderRadius: "5px",
        }}
      >
        {theme === "light" ? "🌙 Темна тема" : "☀️ Світла тема"}
      </button>
    );
  };
  
  export default ThemeToggle;