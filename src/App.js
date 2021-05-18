import React, { Component } from "react";

import TodoList from "./Components/TodoList";
import iconMoon from "../src/images/icon-moon.svg";
import iconSun from "../src/images/icon-sun.svg";

class App extends Component {
  state = {
    darkMode: true,
  };
  handleClick = () => this.setState({ darkMode: !this.state.darkMode });

  render() {
    return (
      <div className={this.state.darkMode ? "app app__dark" : "app app__light"}>
        <div
          className={
            this.state.darkMode
              ? "app__header app__header--dark"
              : "app__header app__header--light"
          }
        >
          <h1>Todo</h1>
          <img
            src={this.state.darkMode ? iconSun : iconMoon}
            alt={this.state.darkMode ? "iconSun " : "iconMoon"}
            onClick={this.handleClick}
          />
        </div>
        <TodoList />
      </div>
    );
  }
}
export default App;
