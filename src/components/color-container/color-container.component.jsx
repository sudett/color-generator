import React from "react";

import ColorItem from "../color-item/color-item.component";

import { ColorContainerStyles } from "./color-container.styles";

const ColorContainer = ({ colorsList }) => {
  return (
    <ColorContainerStyles>
      {colorsList.map((color, index) => (
        <ColorItem key={index} {...color} hex={color.hex} />
      ))}
    </ColorContainerStyles>
  );
};

export default ColorContainer;
