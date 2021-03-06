import React from "react"; // import { FaCheck } from "react-icons/fa";

import "./styles/Checkbox.css";

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // checked: (this.props.isChecked !== null) ? this.props.isChecked : false,
      outterStyle: {
        borderColor: this.selectColor(this.props.color),
        width: this.selectOutterSize(this.props.size),
        height: this.selectOutterSize(this.props.size),
        borderRadius: this.selectOutterShape(this.props.shape),
      },
      innerStyle: {
        backgroundColor: this.selectColor(this.props.color),
        width: this.selectInnerSize(this.props.size),
        height: this.selectInnerSize(this.props.size),
        borderRadius: this.selectInnerShape(this.props.shape),
      },
    };
    this.handleCheckboxClicked = this.handleCheckboxClicked.bind(this);
    this.selectOutterShape = this.selectOutterShape.bind(this);
    this.selectInnerShape = this.selectInnerShape.bind(this);
    this.selectColor = this.selectColor.bind(this);
    this.selectOutterSize = this.selectOutterSize.bind(this);
    this.selectInnerSize = this.selectInnerSize.bind(this);
  }

  selectOutterShape(shape) {
    switch (shape) {
      case "square":
        return "0px";

      case "circle":
        return "100%";

      case "round":
        return "7px";

      default:
        return "7px";
    }
  }

  selectInnerShape(shape) {
    switch (shape) {
      case "square":
        return "0px";

      case "circle":
        return "100%";

      case "round":
        return "5px";

      default:
        return "5px";
    }
  }

  selectColor(color) {
    switch (color) {
      case "red":
        return "#e03636";

      case "blue":
        return "#4287f5";

      case "green":
        return "#44c753";

      case "orange":
        return "#f57e42";

      default:
        return color;
    }
  }

  selectOutterSize(size) {
    switch (size) {
      case "small":
        return "20px";

      case "medium":
        return "24px";

      case "big":
        return "28px";

      default:
        return "24px";
    }
  }

  selectInnerSize(size) {
    switch (size) {
      case "small":
        return "14px";

      case "medium":
        return "18px";

      case "big":
        return "22px";

      default:
        return "18px";
    }
  }

  handleCheckboxClicked() {
    // const {checked} = this.state
    // this.setState({
    //     checked: !checked
    // })
    this.props.onChange(!this.props.isChecked);
  }

  render() {
    return React.createElement(
      "button",
      {
        className: "checkbox",
        name: this.props.name,
        onClick: (e) => {
          e.preventDefault();
          this.handleCheckboxClicked();
        },
        style: this.state.outterStyle,
      },
      this.props.isChecked
        ? React.createElement("div", {
            className: "checkbox-selected",
            style: this.state.innerStyle,
          })
        : ""
    );
  }
}

export default Checkbox;
