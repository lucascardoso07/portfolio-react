import { styled } from "styled-components";

export const StyledFooter = styled.div`
  width: 100%;
  background-color: var(--grey0);
  padding: 50px 0;

  .container {
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .agradecimento {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    p {
      color: var(--grey2);
    }
    span {
      color: var(--grey2);
    }
  }
  .agradecimento img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  .social-midia {
    display: flex;
    gap: 1.3rem;
  }

  @media (max-width: 500px) {
    .container {
      flex-direction: column;
      gap: 30px;
    }
  }
`;
