import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 3rem;
  align-items: center;
  padding: 2.5rem 3rem 1rem;
  height: 11rem;

  @media only screen and (max-width: 50em) {
    padding-top: 1rem;
    padding-bottom: 0.5rem;
    grid-template-columns: auto;
    height: 13rem;
  }
`;

export const HeadingPrimary = styled.h1`
  align-self: start;
  text-transform: capitalize;
  letter-spacing: 2px;

  @media only screen and (max-width: 50em) {
    margin-bottom: 1rem;
  }
`;

export const Message = styled.p`
  grid-column: 2 / -1;
  color: var(--clr-red-dark);

  opacity: ${({ error }) => (error ? 1 : 0)};

  @media only screen and (max-width: 50em) {
    grid-column: 1 / -1;
  }
`;
