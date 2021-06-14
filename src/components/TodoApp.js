import React, { useState, useEffect } from "react";
import uuid from "uuid/v4";
import lightIcon from "../images/icon-sun.svg";
import darkIcon from "../images/icon-moon.svg";
import TodoForm from "./TodoForm";
import TodoList from "./todoList";
import { initialTodos } from "./InitialTodos";
import { Hero, Headertext, Wrapper } from "./styles/TodoAppStyles";

const TodoApp = ({ theme, toggleTheme }) => {
  // Checking if there's are todos inthe localstorage and giving them a default value of initialTodos if there aren't
  const init = JSON.parse(
    window.localStorage.getItem("todos") || JSON.stringify(initialTodos)
  );

  // Todos state
  const [todos, setTodos] = useState(init);

  // Use useEffect to keep track of changes in the state and update the localStorage
  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Adding todos
  const addTodo = (todo) =>
    setTodos([
      ...todos,
      { id: uuid(), task: todo, completed: false, isEditing: false },
    ]);

  // Toggling completion of Todos (from true to false or false to true)
  const toggleCompletion = (todoId) => {
    const updatedTodos = todos.map((t) =>
      t.id === todoId ? { ...t, completed: !t.completed } : t
    );
    setTodos(updatedTodos);
  };

  // Deleting Todos/Removing Todos
  const deleteTodo = (todoId) =>
    setTodos([...todos.filter((todo) => todo.id !== todoId)]);

  // Checking the No of uncompleted todo itemsLeft
  // const itemsLeft = () => todos.filter((todo) => !todo.completed).length;

  // making a copy of the todos
  // const todosCopy = [...todos];

  return (
    <>
      <Hero theme={theme === "light" ? "LightMode" : "DarkMode"}>
        <Wrapper>
          <Headertext>Todo</Headertext>
          <img
            src={theme === "light" ? darkIcon : lightIcon}
            alt={theme === "dark" ? "dark mode Icon" : "light mode icon"}
            onClick={() => toggleTheme()}
          />
        </Wrapper>
        <TodoForm theme={theme} addTodo={addTodo} />
      </Hero>
      <TodoList
        initialTodos={todos}
        deleteTodo={deleteTodo}
        toggleCompletion={toggleCompletion}
        theme={theme}
      />
      {/* <div>
        <h1>{itemsLeft()} items left</h1>
        <button onClick={() => setTodos(todos)}>All</button>
        <button
          onClick={() => setTodos(todosCopy.filter((todo) => !todo.completed))}
        >
          Active
        </button>
        <button
          onClick={() => setTodos(todosCopy.filter((todo) => todo.completed))}
        >
          Completed
        </button>
        <button
          onClick={() => setTodos(todosCopy.filter((todo) => !todo.completed))}
        >
          Clear Completed
        </button>
      </div> */}
    </>
  );
};

export default TodoApp;
