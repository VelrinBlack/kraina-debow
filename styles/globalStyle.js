import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html, *, *::before, *::after {
        box-sizing: border-box
    }

    body, a, button {
        font-family: 'Montserrat', sans-serif;
    }
`;

export default GlobalStyle;
