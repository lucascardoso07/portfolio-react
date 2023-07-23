import { styled } from "styled-components";

export const StyledContacts = styled.div`
  width: 100%;
  height: auto;
  background-color: var(--grey1);

  .container {
    width: 70%;
    margin: 0 auto;
    display: flex;
  }
  .contact-infos {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    justify-content: center;
    padding: 50px;

    h3 {
      color: var(--whiteFixed);
      font-size: 1.8rem;
      max-width: 100%;
    }

    p {
      color: var(--grey2);
      max-width: 70%;
    }
  }
  .my-contacts {
  }
  ul {
    margin-top: 50px;
    padding: 40px 0;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  li {
    display: flex;
    align-items: center;
    margin-top: 30px;

    gap: 1rem;

    h4 {
      margin: 0;
      padding: 0;
      color: var(--whiteFixed);
    }
    p {
      color: var(--grey2);
      font-size: 0.8rem;
    }
    a {
      color: var(--whiteFixed);
      cursor: pointer;
      font-size: 0.9rem;
    }
  }
  .my-contacts-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: 500px) {
    height: auto;
    .container {
      flex-direction: column;
    }
    .my-contacts {
    }
    ul {
      margin-top: 0px;
    }
  }

  @media (max-width: 700px) {
    .container {
      flex-direction: column;
    }
    .my-contacts {

  }
`;
