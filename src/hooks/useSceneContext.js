import { useReducer } from "react";
import dummyScene from "../data/dummyScene";
import { useEffect } from "react/cjs/react.development";

function useSceneContext() {
    const initialState = {};

    const reducer = (sceneState, action) => {
        switch (action.type) {
            case "LOAD SCENE":
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
            case "DELETE SCENE":
                return;
            case "ADD BUBBLE":
                return;
            case "DELETE BUBBLE":
                return;
            case "EDIT BUBBLE":
                sceneState.dialogue[action.payload.index] =
                    action.payload.bubble;
                return { ...sceneState };
            case "EDIT CHARACTER":
                sceneState.characters[action.payload.index] =
                    action.payload.newCharacterState;
                return { ...sceneState };
            case "ADD CHARACTER":
                return;
            case "DELETE CHARACTER":
                return;
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
