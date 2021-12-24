import React, { useState, useEffect } from "react";

import { ColorItemContainer, ClipBoard } from "./color-item.styles";

const ColorItem = ({ hex, weight, type, rgb }) => {
  const [clipboard, setClipboard] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setClipboard(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [clipboard]);

  const clipboardHandler = () => {
    setClipboard(true);
    navigator.clipboard.writeText(`#${hex}`);
  };

  const color = rgb.join(",");

  return (
    <ColorItemContainer type={type} color={color} onClick={clipboardHandler}>
      <span>{weight}%</span>
      <span>#{hex}</span>
      <ClipBoard clipboard={clipboard}>Copied to clipboard</ClipBoard>
    </ColorItemContainer>
  );
};

export default ColorItem;
