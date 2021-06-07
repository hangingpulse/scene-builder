import { useReducer } from "react";
import dummyScene from "../data/dummyScene";
import { useEffect } from "react/cjs/react.development";

function useSceneContext() {
    const initialState = {};

    const reducer = (sceneState, action) => {
        switch (action.type) {
            case "LOAD SCENE":
                console.log(action.payload);
                action.payload.characters.filter((character) => character);
                return {
                    ...action.payload,
                };
            case "EDIT SCENE":
                const newState = {
                    ...sceneState,
                    characters: action.payload.characters,
                    dialogue: action.payload.dialogue,
                    header: action.payload.header,
                };

                console.log(newState);

                return newState;
            case "DELETE SCENEITEM":
                const dialogueWithoutDeletedItem = [...sceneState.dialogue];
                dialogueWithoutDeletedItem.splice(action.payload, 1);
                return {
                    ...sceneState,
                    dialogue: [...dialogueWithoutDeletedItem],
                };
            case "ADD SCENEITEM":
                const dialogueWithNewItem = [...sceneState.dialogue];
                dialogueWithNewItem.splice(
                    action.payload.index,
                    0,
                    action.payload.sceneItem
                );
                return { ...sceneState, dialogue: [...dialogueWithNewItem] };

            case "EDIT SCENEITEM":
                const dialogueWithEditedItem = [...sceneState.dialogue];

                dialogueWithEditedItem[action.payload.index] =
                    action.payload.sceneItem;
                return { ...sceneState, dialogue: [...dialogueWithEditedItem] };
            case "UPDATE SCENEELEMENTS":
                console.log(action.payload);
                const characterIndexArray = action.payload.characters.map(
                    (character) => character.id
                );
                const newDialogueArray = sceneState.dialogue.filter(
                    (item) => !characterIndexArray.includes(item.character)
                );
                return {
                    ...sceneState,
                    header: action.payload.header,
                    characters: action.payload.characters,
                    dialogue: newDialogueArray,
                };
            default:
                return sceneState;
        }
    };

    const [sceneState, dispatch] = useReducer(reducer, initialState, () => {
        // get the initialState from the localStorage
        const localScene = localStorage.getItem("scene");
        return localScene ? JSON.parse(localScene) : { ...dummyScene };
    });

    // save the sceneState to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem("scene", JSON.stringify(sceneState));
    }, [sceneState]);

    return [sceneState, dispatch];
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
