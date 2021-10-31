import React from "react";

import "./color-item.styles.css";

export default class ColorItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clipboard: false,
    };
  }

  clickHandler = () => {
    navigator.clipboard.writeText(`#${this.props.hex}`);

    this.setState({ clipboard: true }, () => {
      const timer = setTimeout(() => {
        this.setState({ clipboard: false });
      }, 3000);
      return () => clearTimeout(timer);
    });
  };

  render() {
    const { hex, weight, type, rgb } = this.props;
    const color = rgb.join(",");

    return (
      <div
        className={`${type === "shade" ? "white-text" : ""} color-item`}
        style={{ backgroundColor: `rgb(${color})` }}
        onClick={this.clickHandler}
      >
        <span>{weight}%</span>
        <span>#{hex}</span>
        <p className={`${this.state.clipboard ? "" : "hidden"} clipboard`}>
          Copied to clipboard
        </p>
      </div>
    );
  }
}
