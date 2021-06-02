import { ThemeProvider } from "styled-components";

const mainTheme = {
    colors: {
        primary: "#756c83",
        primaryLight: "#EBE9ED",
        secondary: "#b9e1dc",
        background: "#fbfbfb",
        highlight: "#f38181",
    },
    fonts: {
        serif: "Lexend",
        sansSerif: "Cormorand",
        fontSizes: {
            base: "1.6rem",
            baseSmall: "1.4rem",
            blockLarge: "1.92rem",
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
