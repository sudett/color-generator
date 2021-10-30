import React from "react";

import Form from "./components/form/form.component";
import "./App.css";
import ColorContainr from "./components/color-container/color-container.component";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      color: "f15025",
      error: false,
      colorsList: [],
    };
  }

  submitHandler = (e) => {
    e.preventDefault();
    this.setState({ color: e.target.querySelector("input").value }, () =>
      console.log(this.state.color)
    );
  };

  changeHandler = (e) => {
    this.setState({ color: e.target.value });
  };

  render() {
    return (
      <div>
        <header className="header">
          <h1 className="heading-primary">Color generator</h1>
          <Form
            submitHandler={this.submitHandler}
            color={this.state.color}
            changeHandler={this.changeHandler}
          />
          <p className={`${this.state.error ? "" : "hidden"} message`}>
            Plaese enter correct color
          </p>
        </header>
        <ColorContainr
          colorsList={this.state.colorsList}
          color={this.state.color}
        />
      </div>
    );
  }
}
