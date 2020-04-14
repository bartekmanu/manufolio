import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  :root {
    --main-color: #fbbc0c;
    --main-font-color: #ffffff;
    --secondary-font-color: #4a4a4a;
    --main-bg-color: #2b2b2b;
    --secondary-bg-color: #000000;
    --side-bar-shadow: rgba(0, 0, 0, .25);
  }

  html {
    font-size: 16px;
    font-family: 'Doppio One', sans-serif;
    color: var(--main-font-color);

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
