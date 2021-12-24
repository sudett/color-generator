import React from "react";

import Form from "../form/form.component";

import { HeaderContainer, HeadingPrimary, Message } from "./header.styles";

const Header = ({ submitHandler, changeHandler, error, color }) => {
  return (
    <HeaderContainer>
      <HeadingPrimary>Color generator</HeadingPrimary>
      <Form
        submitHandler={submitHandler}
        changeHandler={changeHandler}
        color={color}
        error={error}
      />
      <Message error={error}>Plaese enter correct color</Message>
    </HeaderContainer>
  );
};

export default Header;
