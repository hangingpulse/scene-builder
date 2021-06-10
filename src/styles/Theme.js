import { css, ThemeProvider } from "styled-components";

const sizes = {
    mobile: 320,
    tablet: 500,
    desktopSmall: 1000,
    desktopLarge: 1200,
};
const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (min-width: ${sizes[label]}px) {
            ${css(...args)};
        }
    `;
    return acc;
}, {});

const mainTheme = {
    ...media,
    colors: {
        primary: "#756c83",
        primaryLight: "#EBE9ED",
        secondary: "#b9e1dc",
        backgroundDark: "#fbfbfb",
        background: "#121212",
        highlight: "#f38181",
    },
    fonts: {
        serif: "Lexend",
        sansSerif: "Cormorand",
        fontSizes: {
            base: "1.6rem",
            baseSmall: "1.4rem",
            blockSmall: "1.17rem",
            blockLarge: "1.92rem",
            header2: "2.77rem",
            header2Small: "2.02rem",
        },
    },
    animationPositions: [
        {
            top: "50%",
            bottom: "",
            right: "",
            left: "",
            translateY: "-50%",
        },
        {
            top: "0",
            bottom: "",
            right: "",
            left: "0",
            translateY: "0",
        },
        {
            top: "",
            bottom: "50%",
            right: "0%",
            left: "",
            translateY: "",
        },
        {
            top: "50%",
            bottom: "",
            right: "",
            left: "0",
            translateY: "0",
        },
        {
            top: "",
            bottom: "0",
            right: "0",
            left: "",
            translateY: "-100%",
        },
    ],
};

function Theme({ children }) {
    return <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>;
}

export default Theme;

// This is where the color, font and sizing themes (etc) for the styled components is stored.
// Define Media Queries here
