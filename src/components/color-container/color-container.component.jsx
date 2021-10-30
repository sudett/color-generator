import React from "react";

import ColorItem from "../color-item/color-item.component";

import "./color-container.styles.css";

const ColorContainer = ({ colorsList }) => {
  return (
    <div className="color-container">
      {colorsList.map((color, index) => (
        <ColorItem key={index} {...color} hex={color.hex} />
      ))}
    </div>
  );
};

export default ColorContainer;
