import { styled } from "styled-components";

export const StyledProjects = styled.div`
  width: 100%;
  background-color: var(--grey0);

  .container {
    width: 75%;
    margin: 0 auto;
  }
  .title-contaier {
    width: 100%;
    display: flex;
    flex-direction: column;

    h2 {
      color: var(--whiteFixed);
    }
    p {
      color: var(--grey2);
    }
    a {
      color: #ff577f;
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
  @media (max-width: 500px) {
    .container {
      width: 100vw;
    }
    .title-contaier {
      width: 100vw;
      display: flex;
      align-items: center;
    }
    ul {
      width: 90vw;
      padding: 30px;
      padding-left: 15px;
      display: flex;
      flex-direction: column;
    }
  }
`;
