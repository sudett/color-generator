import React from "react";

import ColorItem from "../color-item/color-item.component";

import "./color-container.styles.css";

const ColorContainer = ({ colorsList, color }) => {
  return (
    <div className="color-container">
      <ColorItem color={color} />
      <ColorItem color={color} />
      <ColorItem color={color} />
      <ColorItem color={color} />
      <ColorItem color={color} />
      <ColorItem color={color} />
      <ColorItem color={color} />
      <ColorItem color={color} />
      <ColorItem color={color} />
      <ColorItem color={color} />
    </div>
  );
};

export default ColorContainer;
