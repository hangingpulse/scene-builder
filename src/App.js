import React, { useState } from "react";
import styled from "styled-components";
import Header from "./components/pagecomponents/Header/Header";
import Main from "./components/pagecomponents/Main/Main";
import Footer from "./components/pagecomponents/Footer/Footer";
import AnimationPreview from "./components/editorcomponents/AnimationPreview";
import Theme from "./styles/Theme";
import GlobalStyle from "./styles/globalStyles";
import { SceneContextProvider } from "./context/SceneContextProvider";
import { AnimationContextProvider } from "./context/AnimationContext";
import { SceneEditorContextProvider } from "./context/SceneEditorContext";
import { PreviewContextProvider } from "./context/PreviewContext";

const AppBody = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
`;

function App() {
    const [preview, togglePreview] = useState(true);

    return (
        <Theme>
            <GlobalStyle />
            <AppBody>
                <Header />
                <SceneContextProvider>
                    <SceneEditorContextProvider>
                        <AnimationContextProvider>
                            <PreviewContextProvider>
                                <Main />
                                {preview && <AnimationPreview />}
                            </PreviewContextProvider>
                        </AnimationContextProvider>
                    </SceneEditorContextProvider>
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
