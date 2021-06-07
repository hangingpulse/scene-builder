import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: inherit;
    }
    html {
        font-size: 50%;
        ${({ theme }) => theme.tablet`
            font-size: 55%;
        `}
        ${({ theme }) => theme.desktopSmall`
            font-size: 62.5%;
        `}

    }
    body {
        box-sizing: border-box;
    }
`;

export default GlobalStyle;
