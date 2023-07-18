import { styled } from "styled-components";

export const StyledSkill = styled.li`
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    padding: 0 3px;
    text-align: center;
    opacity: 0;

    /* &:hover {
      text-align: center;
      opacity: 1;
    } */
  }

  i {
    font-size: 80px;
    color: var(--whiteFixed);
    transition: all ease-in 0.2s;
    transform: scale(0.9);
  }
  i:hover {
    color: var(--brand-1);
    transform: scale(1);
  }

  i:hover p {
    text-align: center;
    opacity: 1;
  }
`;
