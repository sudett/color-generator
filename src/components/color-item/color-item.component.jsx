import React from "react";

import "./color-item.styles.css";

const ColorItem = ({ hex, weight, type, rgb }) => {
  const color = rgb.join(",");
  return (
    <div
      className={`${type === "shade" ? "white-text" : ""} color-item`}
      style={{ backgroundColor: `rgb(${color})` }}
    >
      <span>{weight}%</span>
      <span>#{hex}</span>
    </div>
  );
};

export default ColorItem;
