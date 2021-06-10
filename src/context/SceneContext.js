import React, { createContext } from "react";
import useSceneContext from "../hooks/useSceneContext";

const SceneContext = createContext();

function SceneContextProvider({ children }) {
    const [sceneState, dispatch, newScene, setNewScene] = useSceneContext();

    return (
        <SceneContext.Provider
            value={{ sceneState, dispatch, newScene, setNewScene }}
        >
            {children}
        </SceneContext.Provider>
    );
}

export { SceneContextProvider, SceneContext };
