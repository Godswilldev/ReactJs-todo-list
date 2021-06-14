import React from "react";
import useInputState from "../hooks/useInputState";
import { Input, Form } from "./styles/TodoFormStyles";
const TodoForm = ({ addTodo, theme }) => {
  const [todo, setTodo, reset] = useInputState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (todo.trim() === "") {
      return;
    }
    addTodo(todo);
    reset();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        theme={theme}
        name="todo"
        type="text"
        value={todo}
        onChange={setTodo}
        placeholder="Create a new Todo..."
      />
    </Form>
  );
};

export default TodoForm;
