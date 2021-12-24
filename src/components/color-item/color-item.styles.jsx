import styled from "styled-components";

export const ColorItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 18vh;
  padding: 2rem 3rem;
  cursor: pointer;
  color: ${({ type }) => (type === "shade" ? "#fff" : "var(--clr-grey-2)")};
  background-color: ${({ color }) => `rgb(${color})`};
`;

export const ClipBoard = styled.p`
  color: var(--clr-grey-7);
  margin-top: 1rem;
  text-align: center;
  text-transform: uppercase;
  display: ${({ clipboard }) => (clipboard ? "block" : "none")}};
`;
