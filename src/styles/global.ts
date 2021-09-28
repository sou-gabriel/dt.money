import { createGlobalStyle } from 'styled-components/macro'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    -webkit-font-smoothing: antialiased;
    font-family: 'Poppins', sans-serif;
    background-color: ${props => props.theme.colors.background};
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button, input {
    border: none;
    font-family: 'Poppins', sans-serif
  }

  button {
    cursor: pointer;
  }
`
