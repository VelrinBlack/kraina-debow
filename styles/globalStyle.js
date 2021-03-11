import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html, *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
    }

    body, a, button {
        font-family: 'Montserrat', sans-serif;
    }

    input, textarea, button, select, a {
        -webkit-tap-highlight-color: transparent;
    }
`;

export default GlobalStyle;
