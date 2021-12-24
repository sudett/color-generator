import React from "react";

import { FormContainer, FormInput, FormButton } from "./form.styles";

const Form = ({ submitHandler, color, changeHandler, error }) => (
  <FormContainer onSubmit={submitHandler}>
    <FormInput
      error={error}
      type="text"
      value={color}
      onChange={changeHandler}
      placeholder="#8f5d90"
    ></FormInput>
    <FormButton type="submit">Submit</FormButton>
  </FormContainer>
);

export default Form;
