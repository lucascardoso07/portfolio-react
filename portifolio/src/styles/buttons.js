import { styled } from "styled-components";

export const ButtonPrimaryStyled = styled.button`
  width: 300px;
  height: 50px;
  color: var(--whiteFixed);
  background-color: var(--brand-1);
  border-radius: 6px;
  border: 2px solid var(--brand-1);
  cursor: pointer;
  font-size: 1.4rem;
  transition: all ease-in 0.2s;

  &:hover {
    background-color: var(--brand-2);
    border: 2px solid var(--brand-2);
  }
`;

export const ButtonSocialMidia = styled.i`
  font-size: 50px;
  color: var(--whiteFixed);
  transition: all ease-in 0.2s;

  &:hover {
    color: var(--brand-1);
  }
`;
