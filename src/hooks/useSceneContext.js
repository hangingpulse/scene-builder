import { useReducer } from "react";
import dummyScene from "../data/dummyScene";

function useSceneContext() {
    const initialState = { ...dummyScene };

    const reducer = (sceneState, action) => {
        switch (action.type) {
            case "LOAD SCENE":
                return;
            case "CREATE NEW SCENE":
                return;
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

    const [sceneState, dispatch] = useReducer(reducer, initialState);

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
