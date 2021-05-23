import React from "react";
import styled from "styled-components";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Theme from "./styles/Theme";
import GlobalStyle from "./styles/globalStyles";

const AppBody = styled.div`
    display: flex;
    flex-direction: column;
`;

function App() {
    return (
        <Theme>
            <GlobalStyle />
            <AppBody>
                <Header />
                <Main />
                <Footer />
            </AppBody>
        </Theme>
    );
}

export default App;

// Things to do Here:
// Wrap everything in a global state context
// Otherwise: Header, Main, Footer Components
// The rest happens in the components
