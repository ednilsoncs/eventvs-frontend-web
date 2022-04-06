import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }


  body{
    -webkit-font-smoothing: antialiased;
    margin: 0px;
  }

  border-style, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5{
    font-weight: 500;
  }

  button{
    cursor: pointer;
  }
`;
