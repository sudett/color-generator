import styled, { css } from "styled-components";

const inputStyles = css`
  outline: none;
  padding: 1rem 1.75rem;
  width: 70%;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  font-size: 2rem;
  font-weight: 500;
  color: inherit;
  border: ${({ error }) => (error ? "2px solid var(--clr-red-dark)" : "none")};
`;

export const FormContainer = styled.form`
  width: 40rem;

  @media only screen and (max-width: 50em) {
    width: 30rem;
  }
`;

export const FormInput = styled.input`
  ${inputStyles}
  ${inputStyles}::placeholder {
    color: var(--clr-grey-8);
  }
`;

export const FormButton = styled.button`
  width: 30%;
  outline: none;
  border: none;
  background-color: var(--clr-primary-5);
  color: #fff;
  font-size: 2rem;
  padding: 1rem 1.75rem;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
`;
