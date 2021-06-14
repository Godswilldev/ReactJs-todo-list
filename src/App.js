import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/Theme";
import { GlobalStyles } from "./components/Global";
import useDarkMode from "./hooks/useDarkMode";
import TodoApp from "./components/TodoApp";

const App = () => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }
  return (
    <div>
      <ThemeProvider theme={themeMode}>
        <>
          <GlobalStyles />
          <TodoApp theme={theme} toggleTheme={toggleTheme} />
        </>
      </ThemeProvider>
    </div>
  );
};

export default App;
