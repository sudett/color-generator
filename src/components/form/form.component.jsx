import React from "react";

import "./form.styles.css";

const Form = ({ submitHandler, color, changeHandler }) => (
  <form className="form" onSubmit={submitHandler}>
    <input
      className="form-input"
      type="text"
      value={color}
      onChange={changeHandler}
      placeholder="#f15025"
    ></input>
    <button className="form-btn" type="submit">
      Submit
    </button>
  </form>
);

export default Form;
