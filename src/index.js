import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { SceneContextProvider } from "./context/SceneContextProvider";
import { AnimationContextProvider } from "./context/AnimationContext";
import { SceneEditorContextProvider } from "./context/SceneEditorContext";
import {
    PreviewContextProvider,
    PreviewContext,
} from "./context/PreviewContext";

import App from "./App";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <SceneContextProvider>
                <SceneEditorContextProvider>
                    <AnimationContextProvider>
                        <PreviewContextProvider>
                            <App />
                        </PreviewContextProvider>
                    </AnimationContextProvider>
                </SceneEditorContextProvider>
            </SceneContextProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);

// Things to do here:
// Build Global Theme with styled components
