import React from "react";
import styled from "styled-components";
import Header from "./components/pagecomponents/Header/Header";
import Main from "./components/pagecomponents/Main/Main";
import Footer from "./components/pagecomponents/Footer/Footer";
import Theme from "./styles/Theme";
import GlobalStyle from "./styles/globalStyles";
import { SceneContextProvider } from "./context/SceneContextProvider";
import { css } from "styled-components";

const AppBody = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
`;

function App() {
    return (
        <Theme>
            <GlobalStyle />
            <AppBody>
                <Header />
                <SceneContextProvider>
                    <Main />
                </SceneContextProvider>
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
