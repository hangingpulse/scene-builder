import React, { createContext, useContext, useEffect, useState } from "react";
import { SceneContext } from "./SceneContextProvider";

const SceneEditorContext = createContext();

function SceneEditorContextProvider({ children }) {
    const { sceneState, dispatch } = useContext(SceneContext);

    const [editorState, setEditorState] = useState({ ...sceneState });

    useEffect(() => {
        setEditorState({ ...sceneState });
    }, [sceneState]);

    // in this context there will be all the functions to edit, rearrange, delete etc the different scene items

    const deleteItem = () => {};

    const addItem = () => {};

    // Edit a Scene Item, like altering the length, the type, if it shows in the animation, change the character
    const editItem = () => {};

    // Split an item into two items
    const splitItem = () => {};

    // Merge two items into one
    const mergeItems = () => {};

    // shift an item to a different place. This would be best with DragnDrop. But maybe do it with clicking first.
    const shiftItem = () => {};

    return (
        <SceneEditorContext.Provider value={{ editorState }}>
            {children}
        </SceneEditorContext.Provider>
    );
}

export { SceneEditorContext, SceneEditorContextProvider };
