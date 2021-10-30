import React from "react";

import "./form.styles.css";

const Form = ({ submitHandler, color, changeHandler, error }) => (
  <form className="form" onSubmit={submitHandler}>
    <input
      className={`${error ? "error" : ""} form-input`}
      type="text"
      value={color}
      onChange={changeHandler}
      placeholder="#8f5d90"
    ></input>
    <button className="form-btn" type="submit">
      Submit
    </button>
  </form>
);

export default Form;
