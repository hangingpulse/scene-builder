import { useReducer } from "react";
import { characterImages } from "../data/characterdata";

function useEditCharacter(character) {
    const initialState = { ...character };

    const reducer = (characterState, action) => {
        switch (action.type) {
            case "NEXT IMAGE":
                return {
                    ...characterState,
                    imageIndex:
                        characterState.imageIndex < characterImages.length - 1
                            ? characterState.imageIndex + 1
                            : 0,
                };
            case "PREVIOUS IMAGE":
                return {
                    ...characterState,
                    imageIndex: characterState.imageIndex
                        ? characterState.imageIndex - 1
                        : characterImages.length - 1,
                };
            case "CHANGE COLOR":
                return {
                    ...characterState,
                    colorIndex: action.payload,
                };
            case "CHANGE NAME":
                return {
                    ...characterState,
                    name: action.payload,
                };
            default:
                return characterState;
        }
    };

    const [characterState, editCharacterState] = useReducer(
        reducer,
        initialState
    );

    return [characterState, editCharacterState];
}

export default useEditCharacter;
