import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: inherit;    
    margin: 0;
    padding: 0;

  }
  html{
      font-size: 62.5%;
      box-sizing: border-box;
      @media (max-width:1440px){
        font-size: 62.5%;
      }
      @media (max-width:1024px){
        font-size: 56%;
      }@media (max-width:768px){
        font-size: 50%;
      }
      @media (max-width:425px){
        font-size: 43%;
      }
      @media (max-width:375px){
        font-size: 38%;
      }
      @media (max-width:320px){
        font-size: 32.5%;
      }
  }

  body {
    /* align-items: center; */
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    height: 100vh;
    font-family: "Josefin Sans", sans-serif;
    transition: all 0.3s linear;
  }`;
