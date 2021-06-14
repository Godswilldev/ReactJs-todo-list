import React from "react";
import uuid from "uuid/v4";
import Checkbox from "./Checkbox";
import iconCross from "../images/icon-cross.svg";
import { TodosList, Todos, Check, Task, Button } from "./styles/TodoListStyles";

const TodoList = ({ initialTodos, toggleCompletion, deleteTodo, theme }) => {
  return (
    <TodosList theme={theme}>
      {initialTodos.map((task) => (
        <Todos key={uuid()} theme={theme}>
          <Check>
            <Checkbox
              type="checkbox"
              name="task"
              id="task"
              isChecked={task.completed}
              onChange={() => toggleCompletion(task.id)}
              shape="circle"
              color="#c058f3"
            />
            <Task
              style={{
                textDecoration: task.completed && "line-through",
                color: task.completed && "#9394a5",
              }}
            >
              {task.task}
            </Task>
          </Check>
          <Button onClick={() => deleteTodo(task.id)}>
            <img src={iconCross} alt="icon-cross" />
          </Button>
        </Todos>
      ))}
    </TodosList>
  );
};

export default TodoList;
