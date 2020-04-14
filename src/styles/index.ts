import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  :root {
    /* TODO: delete */
    --test: #fff000;
  }

  html {
    ul {
      margin: 0;
      padding: 0;

      li {
        list-style: none;
      }
    }
  }
`;

export default {};
