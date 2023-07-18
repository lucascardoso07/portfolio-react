import { styled } from "styled-components";

export const StyledBanner = styled.div`
  width: 100%;
  height: 100%;
  padding: 80px 0;

  .container {
    width: 70%;
    height: 100%;
    margin: 0 auto;
  }
  .content-about {
    width: 100%;
    height: 100%;
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;

    span {
      color: var(--brand-1);
    }
  }

  h2 {
    width: 50%;
    font-size: 38px;
    color: var(--whiteFixed);
    margin: 0;
    text-align: center;
    margin-bottom: 20px;
  }
  p {
    width: 50%;
    color: var(--whiteFixed);
    font-size: 18px;
    margin: 0;
    text-align: center;
    margin-bottom: 20px;
  }
  button {
  }
  a {
  }
  .container-submit {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
    gap: 2rem;

    padding: 0 20px;
  }
  ul::-webkit-scrollbar-track {
    background: transparent; /* color of the tracking area */
  }

  @media (max-width: 500px) {
    .container {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .content-about {
      width: 100%;
    }
    .container-skills ul {
      width: 100%;
      padding: 0;
      flex-wrap: wrap;
    }
  }
`;
