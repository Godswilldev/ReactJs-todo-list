import React, { Component } from "react";
import uuid from "uuid/v4";
class TodoForm extends Component {
  state = {
    task: "",
  };

  handleChange = (evt) => {
    const { name, value } = evt.target;
    this.setState({
      [name]: value.trim(),
    });
  };
  handleSubmit = (evt) => {
    evt.preventDefault();
    if (this.state.task === "") {
      return;
    } else {
      this.props.addTodo({ ...this.state, id: uuid(), completed: false });
      this.setState({ task: "" });
    }
  };
  render() {
    return (
      <div className="todoform">
        <form onSubmit={this.handleSubmit} className="todoform__form">
          <input
            type="text"
            name="task"
            id="task"
            placeholder="Create a new Todo"
            value={this.state.task}
            onChange={this.handleChange}
            className="todoform__input"
          />
        </form>
      </div>
    );
  }
}
export default TodoForm;
