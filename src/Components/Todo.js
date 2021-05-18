import React, { Component } from "react";
class Todo extends Component {
  render() {
    return (
      <div>
        <input
          type="radio"
          id={this.props.id}
          checked={this.props.completed}
          onClick={this.props.toggleCompletion}
        />
        <label
          htmlFor={this.props.id}
          className={this.props.completed && "completed"}
        >
          {this.props.todos}
        </label>
        <button onClick={this.props.deleteTodo}>X</button>
      </div>
    );
  }
}
export default Todo;
