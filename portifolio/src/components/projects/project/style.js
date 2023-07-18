import { styled } from "styled-components";

export const StyledProject = styled.li`
  width: 40%;
  padding: 20px;
  /* background-color: violet; */

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

  @media (max-width: 500px) {
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
