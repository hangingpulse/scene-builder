import { useReducer, useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";
import templateScene from "../data/templateScene";

function useSceneContext() {
    const [newScene, setNewScene] = useState(true);
    const { storeScene, getStoredScene, clearLocalStorage } = useLocalStorage();

    const initialState = { ...templateScene };

    const reducer = (sceneState, action) => {
        switch (action.type) {
            case "LOAD NEW SCENE":
                clearLocalStorage();
                return {
                    ...templateScene,
                };
            case "USE OPENAI":
                return {
                    ...sceneState,
                    openAIused: sceneState.openAIused + 1,
                };
            case "EDIT SCENE":
                const newState = {
                    ...sceneState,
                    characters: action.payload.characters,
                    sceneItems: action.payload.sceneItems,
                    general: {
                        ...sceneState.general,
                        header: action.payload.header,
                    },
                    meta: {
                        ...sceneState.meta,
                        rawtext: action.payload.rawtext,
                    },
                };

                return newState;
            case "DELETE SCENEITEM":
                const sceneItemsWithoutDeletedItem = [...sceneState.sceneItems];
                console.log(sceneItemsWithoutDeletedItem, action.payload);
                sceneItemsWithoutDeletedItem.splice(action.payload, 1);
                return {
                    ...sceneState,
                    sceneItems: [...sceneItemsWithoutDeletedItem],
                };
            case "ADD SCENEITEM":
                const sceneItemsWithNewItem = [...sceneState.sceneItems];
                sceneItemsWithNewItem.splice(
                    action.payload.index,
                    0,
                    action.payload.sceneItem
                );
                return {
                    ...sceneState,
                    sceneItems: [...sceneItemsWithNewItem],
                };

            case "EDIT SCENEITEM":
                const sceneItemsWithEditedItem = [...sceneState.sceneItems];

                sceneItemsWithEditedItem[action.payload.index] =
                    action.payload.sceneItem;
                return {
                    ...sceneState,
                    sceneItems: [...sceneItemsWithEditedItem],
                };
            case "UPDATE SCENEELEMENTS":
                const characterIndexArray = action.payload.characters.map(
                    (character) => character.id
                );
                const newSceneItemsArray = sceneState.sceneItems.filter(
                    (item) =>
                        characterIndexArray.includes(item.character) ||
                        item.itemType === "ACTIONTEXT"
                );
                console.log(action.payload.header);
                return {
                    ...sceneState,
                    general: {
                        ...sceneState.general,
                        header: action.payload.header,
                    },
                    characters: action.payload.characters,
                    sceneItems: newSceneItemsArray,
                };
            default:
                return sceneState;
        }
    };

    const [sceneState, dispatch] = useReducer(reducer, initialState, () => {
        // get the initialState from the localStorage

        return getStoredScene();
    });

    // save the sceneState to local storage whenever it changes
    useEffect(() => {
        storeScene(sceneState);
    }, [sceneState, storeScene]);

    return [sceneState, dispatch, newScene, setNewScene];
}

export default useSceneContext;

/*
PURPOSE:
This Custom context hook will provide the scene object to all the components.

NEXT STEPS:
- Build a custom hook with useReducer and CreateContext
- Wrap it around the Main Component
- Provide the example scene first (from data)


*/
