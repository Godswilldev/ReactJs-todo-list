import React, { Component } from "react";
// import opener from "../images/icon-cross.svg";
class Todo extends Component {
  render() {
    return (
      <div className="todo">
        <div>
          <input
            type="radio"
            id={this.props.id}
            defaultChecked={this.props.completed}
            onClick={this.props.toggleCompletion}
            className="todo__input"
          />
          <label
            htmlFor={this.props.id}
            className={
              this.props.completed ? "todo__label--completed" : undefined
            }
            style={{ fontSize: "2rem", marginLeft: "2rem" }}
          >
            {this.props.todos}
          </label>
        </div>
        <button className="todo__btn" onClick={this.props.deleteTodo}>
          X
        </button>
      </div>
    );
  }
}
export default Todo;
