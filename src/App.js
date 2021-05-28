import React from "react";
import styled from "styled-components";
import Header from "./components/pagecomponents/Header/Header";
import Main from "./components/pagecomponents/Main/Main";
import Footer from "./components/pagecomponents/Footer/Footer";
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
