import React, { createContext } from "react";
import useSceneContext from "../hooks/useSceneContext";

const SceneContext = createContext();

function SceneContextProvider({ children }) {
    const [sceneState, dispatch] = useSceneContext();

    return (
        <SceneContext.Provider value={{ sceneState, dispatch }}>
            {children}
        </SceneContext.Provider>
    );
}

export { SceneContextProvider, SceneContext };
