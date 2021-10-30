import React from "react";

import Form from "../form/form.component";

import "./header.styles.css";

const Header = ({ submitHandler, changeHandler, error, color }) => {
  return (
    <header className="header">
      <h1 className="heading-primary">Color generator</h1>
      <Form
        submitHandler={submitHandler}
        changeHandler={changeHandler}
        color={color}
        error={error}
      />
      <p className={`${error ? "" : "hidden"} message`}>
        Plaese enter correct color
      </p>
    </header>
  );
};

export default Header;
