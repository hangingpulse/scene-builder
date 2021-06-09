import React, { createContext, useContext, useEffect, useState } from "react";
import { SceneContext } from "./SceneContext";
import uuid from "react-uuid";
import { characterImages, characterColors } from "../data/characterdata";

const SceneEditorContext = createContext();

function SceneEditorContextProvider({ children }) {
    const { sceneState, dispatch } = useContext(SceneContext);

    const [editorState, setEditorState] = useState({ ...sceneState });

    useEffect(() => {
        setEditorState({ ...sceneState });
    }, [sceneState]);

    // function to add a new character. Something's not working here. Adds the new character three times

    // in this context there will be all the functions to edit, rearrange, delete etc the different scene items

    const deleteSceneItem = (index) => {
        dispatch({ type: "DELETE SCENEITEM", payload: index });
    };

    const addSceneItem = (index) => {
        dispatch({
            type: "ADD SCENEITEM",
            payload: {
                index,
                sceneItem: {
                    id: uuid(),
                    character: null,
                    type: "ACTIONTEXT",
                    text: "New Text",
                    duration: 2,
                    delay: 0,
                    display: true,
                },
            },
        });
    };

    // Edit a Scene Item, like altering the length, the type, if it shows in the animation, change the character
    const editSceneItem = (sceneItem, index) => {
        dispatch({ type: "EDIT SCENEITEM", payload: { index, sceneItem } });
    };

    // Split an item into two items
    const splitItem = () => {};

    // Merge two items into one
    const mergeItems = () => {};

    // shift an item to a different place. This would be best with DragnDrop. But maybe do it with clicking first.
    const shiftItem = () => {};

    return (
        <SceneEditorContext.Provider
            value={{
                editorState,
                deleteSceneItem,
                addSceneItem,
                editSceneItem,
            }}
        >
            {children}
        </SceneEditorContext.Provider>
    );
}

export { SceneEditorContext, SceneEditorContextProvider };
