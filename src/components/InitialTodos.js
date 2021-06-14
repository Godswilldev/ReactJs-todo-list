import uuid from "uuid/v4";

export const initialTodos = [
  {
    id: uuid(),
    task: "Jog around the park 3x",
    completed: true,
  },
  {
    id: uuid(),
    task: "10 minutes meditation",
    completed: false,
  },
  { id: uuid(), task: "Read for 1hr", completed: false },
  { id: uuid(), task: "Pick up groceries", completed: true },
];
