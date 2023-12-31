import { styled } from "styled-components";

export const StyledProject = styled.li`
  width: 40%;
  padding: 20px;
  border-radius: 8px;
  transition: all ease-in 0.2s;
  border: 2px solid transparent;
  /* transform: scale(0.99); */
  /* background-color: violet; */
  &:hover {
    background-color: rgba(255, 255, 255, 0.01);
    border: 2px solid var(--grey2);

    /* transform: scale(0.99); */
  }
  h2 {
    font-size: 1.6rem;
    color: var(--whiteFixed);
  }
  .langague-container {
    display: flex;
    width: 100%;
  }
  .langague-container p {
    color: var(--grey2);
    font-size: 0.8rem;
    display: flex;
  }

  span {
    color: var(--grey2);
    font-size: 0.8rem;
  }
  .language {
    margin-left: 6px;
    background-color: var(--grey1);
    padding: 3px;
    border-radius: 6px;
  }

  a {
    width: 40%;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .git-buttons {
    display: flex;

    i {
      color: var(--grey2);
    }
  }
  .title-git-card {
    font-size: 0.8rem;

    color: var(--grey2);
  }

  @media (max-width: 700px) {
    width: 90%;
    display: flex;
    flex-direction: column;
    padding: 0;
    overflow: hidden;

    span {
      max-width: 70%;
    }
  }
`;
