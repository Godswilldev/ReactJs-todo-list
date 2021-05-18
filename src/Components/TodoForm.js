import React, { Component } from "react";
import uuid from "uuid/v4";

class TodoForm extends Component {
  state = {
    task: "",
  };

  handleChange = (evt) => {
    const { name, value } = evt.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.addTodo({ ...this.state, id: uuid(), completed: false });
    this.setState({ task: "" });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="task"
            id="task"
            placeholder="Create new Todo"
            value={this.state.task}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}
export default TodoForm;
