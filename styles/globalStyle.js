import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html, *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        -webkit-tap-highlight-color: transparent;
    }

    html, body, #__next {
        height: 100%;
    }

    body, a, button {
        font-family: 'Montserrat', sans-serif;
    }
    
    a {
        color: ${({ theme }) => theme.color.black};
        text-decoration: none;
        
    }
`;

export default GlobalStyle;
