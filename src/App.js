import React from "react";

import Values from "values.js";

import Header from "./components/header/header.component";
import ColorContainr from "./components/color-container/color-container.component";

import "./App.css";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      color: "",
      error: false,
      colorsList: new Values("#8f5d90").all(10),
    };
  }

  submitHandler = (e) => {
    e.preventDefault();

    try {
      const colorsList = new Values(this.state.color).all(10);
      this.setState({ colorsList }, () => console.log(this.state.colorsList));
    } catch (err) {
      this.setState({ error: true });
      console.log(err);
    }
  };

  changeHandler = (e) => {
    this.setState({ color: e.target.value });
  };

  render() {
    return (
      <div>
        <Header
          submitHandler={this.submitHandler}
          changeHandler={this.changeHandler}
          error={this.state.error}
          color={this.state.color}
        />
        <ColorContainr colorsList={this.state.colorsList} />
      </div>
    );
  }
}
