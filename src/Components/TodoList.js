import React, { Component } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
class TodoList extends Component {
  state = {
    todos: [],
  };
  ///Add todos
  addTodo = (todo) =>
    this.setState((curState) => ({
      todos: [...curState.todos, todo],
    }));

  ////Delete todos
  deleteTodo = (id) =>
    this.setState((curState) => ({
      todos: curState.todos.filter((t) => t.id !== id),
    }));

  ///toggle todos
  toggleCompletion = (id) => {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  };

  ///num of todos uncompleted
  itemsLeft = () =>
    this.state.todos.filter((t) => t.completed === false).length;

  ///active todos
  activeTodos = () =>
    this.setState((curState) => ({
      todos: curState.todos.filter((t) => t.completed === false),
    }));

  completedTodos = () =>
    this.setState((curState) => ({
      todos: curState.todos.filter((t) => t.completed === true),
    }));

  render() {
    return (
      <div>
        <TodoForm addTodo={this.addTodo} />
        {this.state.todos.map((todo) => (
          <div key={todo.id}>
            <Todo
              id={todo.id}
              todos={todo.task}
              deleteTodo={() => this.deleteTodo(todo.id)}
              completed={todo.completed}
              toggleCompletion={() => this.toggleCompletion(todo.id)}
            />
          </div>
        ))}
        <div className="todolist__stats">
          <p>{this.itemsLeft()} Items left</p>
          <p onClick={this.allTodos}>All</p>
          <p onClick={this.activeTodos}>Active</p>
          <p onClick={this.completedTodos}>Completed</p>
          <p onClick={this.completedTodos}>Clear Completed</p>
        </div>
      </div>
    );
  }
}
export default TodoList;
