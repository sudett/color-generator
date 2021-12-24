import React, { useState, useEffect } from "react";

import Values from "values.js";

import Header from "./components/header/header.component";
import ColorContainr from "./components/color-container/color-container.component";

import "./App.css";

const App = () => {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [colorsList, setColorsList] = useState(new Values("#8f5d90").all(10));

  useEffect(() => {
    setError(false);
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    try {
      setError(false);
      const colorsList = new Values(color).all(10);
      setColorsList(colorsList);
      console.log(colorsList);
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

  const changeHandler = (e) => {
    setColor(e.target.value);
  };

  return (
    <div>
      <Header
        submitHandler={submitHandler}
        changeHandler={changeHandler}
        error={error}
        color={color}
      />
      <ColorContainr colorsList={colorsList} />
    </div>
  );
};

export default App;
