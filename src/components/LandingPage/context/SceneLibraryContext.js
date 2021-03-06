import React, { createContext, useState, useEffect } from "react";
import useFetchAllScenes from "../hooks/useFetchAllScenes";

const SceneLibraryContext = createContext();

function SceneLibraryContextProvider({ children }) {
    const allScenes = useFetchAllScenes();

    const [selectedScene, setSelectedScene] = useState(
        allScenes ? allScenes[0] : ""
    );

    useEffect(() => {
        if (allScenes) {
            setSelectedScene(allScenes[allScenes.length - 1]);
        }
    }, [allScenes]);

    const changeSelectedScene = (sceneid) => {
        const newScene = allScenes.find((scene) => scene._id === sceneid);
        setSelectedScene(newScene);
    };

    return (
        <SceneLibraryContext.Provider
            value={{
                allScenes,
                selectedScene,
                setSelectedScene,
                changeSelectedScene,
            }}
        >
            {children}
        </SceneLibraryContext.Provider>
    );
}

export { SceneLibraryContextProvider, SceneLibraryContext };
