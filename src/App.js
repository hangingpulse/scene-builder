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

const AppBody = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
`;

function App() {
    const { preview } = useContext(PreviewContext);
    return (
        <Theme>
            <GlobalStyle />
            <AppBody>
                <Header />
                <Switch>
                    <Route path="/:sceneid">
                        <AnimationFinal />
                    </Route>
                    <Route path="/">
                        <Main />
                        {preview && <AnimationPreview />}
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
