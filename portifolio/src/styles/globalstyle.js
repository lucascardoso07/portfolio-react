import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  scroll-behavior: smooth;
}
  body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: var(--grey1);
    font-family: 'Roboto', sans-serif;
  }
  ul{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  body::-webkit-scrollbar {
  width: 12px;               /* width of the entire scrollbar */
}

body::-webkit-scrollbar-track {
  background: transparent;        /* color of the tracking area */
}

body::-webkit-scrollbar-thumb {
  background-color: var(--brand-1);    /* color of the scroll thumb */
  border-radius: 20px;       /* roundness of the scroll thumb */
  border: 3px solid var(--brand-1);  /* creates padding around scroll thumb */
}

  :root{
    --brand-1: #623CEA;
    --brand-2: #311E75;

    --grey0: #0A0A0B;
    --grey1: #121214;
    --grey2: #868E96;
    --grey3: #DEE2E6;
 

    --socialInstagram: #CF50AC;
    --socialFacebook: #506CCF;
    --socialLinkedin: #0E76A8;

    --whiteFixed: #ffffff;
  }

  @media(max-width: 500px){
    body{
      width: 100%;
    }
  }
`;
