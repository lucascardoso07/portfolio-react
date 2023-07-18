import { styled } from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 80px;
  background-color: var(--grey0);
  filter: drop-shadow(0px 2px 7px #0000004b);
  position: fixed;
  top: 0;
  z-index: 999999;

  .container {
    width: 74%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .container-user {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  p {
    color: var(--whiteFixed);
    font-size: 1.5rem;
    font-weight: bold;
  }

  ul {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  a {
    font-size: 1.2rem;
    color: var(--whiteFixed);
    transition: all 0.2s;
  }

  a:hover {
    color: var(--brand-1);
  }

  @media (max-width: 500px) {
    width: 100%;
    position: absolute;

    nav {
      display: none;
    }
    .container {
      width: 100%;
    }
    .container-user {
      width: 100%;
    }
  }
`;
