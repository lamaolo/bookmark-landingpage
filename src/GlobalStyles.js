import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`  
  html {
    font-size: 62.5%;
  }
  
  body {
    font-family: 'Rubik', sans-serif;
  }

  ul, figure {
    margin: 0;
    padding: 0;
  }

  .btn {
    padding: 8px 20px;
    border-radius: 5px;
    transition: all .15s ease-in-out;
    box-shadow: 0 5px 10px rgba(0,0,0,0.15);
    font-weight: 600;
    &.red {
      color: white;
      border: 2px solid hsl(0, 94%, 66%);;
      background: hsl(0, 94%, 66%);
      &:hover {
        background: none;
        color: hsl(0, 94%, 66%);
      }
    }
    
    &.blue {
      color: white;
      border: 2px solid #5266DF;
      background: #5266DF;
      &:hover {
        background: none;
        color: #5266DF;
      }
    }

    &.gray {
      border: 2px solid #F7F7F7;
      color: #6B6B75;
      background: #F7F7F7;
      &:hover {
        border: 2px solid #6B6B75;
        background: none;
      }
    }

    font-size: 1.4rem;
  }

  .unstyled-btn {
    border: none;
    outline: none;
    background: none;
  }

  .parrafo {
    font-size: 1.8rem;
    color: #aaabb0;
    line-height: 25px;
  }

  .subtitulo {
    color: #1c2039;
    font-weight: 600;
    font-size: 3.1rem;
  }

  .hamburgerButton {
    display: none
  }

  @media screen and (max-width: 775px) {
    .Menu {
      display: none !important;
    } 
    
    .hamburgerButton {
      display: block;
    }
  }
`;
