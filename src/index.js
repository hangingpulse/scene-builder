import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { SceneContextProvider } from "./context/SceneContext";
import { SceneEditorContextProvider } from "./context/SceneEditorContext";
import { PreviewContextProvider } from "./context/PreviewContext";

import App from "./App";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <SceneContextProvider>
                <SceneEditorContextProvider>
                    <PreviewContextProvider>
                        <App />
                    </PreviewContextProvider>
                </SceneEditorContextProvider>
            </SceneContextProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);

// Things to do here:
// Build Global Theme with styled components
