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
        primaryMedium: "#ACA8B3",
        primaryLight: "#EBE9ED",
        secondary: "#b9e1dc",
        background: "#fbfbfb",
        backgroundDark: "#121212",
        highlight: "#f38181",
    },
    boxShadows: {
        animationText: "2px 3px 3px 0px black",
        animationCharacter: "",
        lowLevelTop: "2px 2px 4px 2px black",
        highLevelTop: "0px 0px 4px 4px #b9e1dc",
        mainContainer: "2px 3px 3px 0px black",
        editorInset: "inset 0px 0px 5px 4px black",
        onlyBottomInset: "inset 0px -3px 4px 0px black",
    },
    gradients: {
        background: [
            "rgb(177,241,242)",
            "linear-gradient(333deg, rgba(177,241,242,1) 0%, rgba(185,225,220,1) 100%)",
        ],
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
            title: "3.3rem",
            sectionHeading: "2.77rem",
        },
    },
    animationPositions: [
        {
            top: "50%",
            bottom: "",
        },
        {
            top: "",
            bottom: "",
        },
        {
            top: "",
            bottom: "50%",
        },
        {
            top: "50%",
            bottom: "",
        },
        {
            top: "",
            bottom: "0",
        },
    ],
};

function Theme({ children }) {
    return <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>;
}

export default Theme;

// This is where the color, font and sizing themes (etc) for the styled components is stored.
// Define Media Queries here
