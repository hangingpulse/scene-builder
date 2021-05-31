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
};

function Theme({ children }) {
    return <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>;
}

export default Theme;

// This is where the color, font and sizing themes (etc) for the styled components is stored.
// Define Media Queries here
