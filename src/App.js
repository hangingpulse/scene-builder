import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/layoutcomponents/Header";
import Main from "./components/layoutcomponents/Main";
import Footer from "./components/layoutcomponents/Footer";
import AnimationPreview from "./components/AnimationPreview";
import Theme from "./styles/Theme";
import GlobalStyle from "./styles/globalStyles";
import { PreviewContext } from "./context/PreviewContext";
import AnimationFinal from "./components/AnimationFinal";
import LandingPage from "./components/LandingPage";

const AppBody = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.gradients.background[0]};
    background: ${({ theme }) => theme.gradients.background[1]};
`;

function App() {
    const { preview } = useContext(PreviewContext);
    return (
        <Theme>
            <GlobalStyle />
            <AppBody>
                <Header />
                <Switch>
                    <Route path="/scenes/:sceneid">
                        <AnimationFinal />
                    </Route>
                    <Route path="/create">
                        {preview ? <AnimationPreview /> : <Main />}
                    </Route>
                    <Route path="/">
                        <LandingPage />
                    </Route>
                </Switch>
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
