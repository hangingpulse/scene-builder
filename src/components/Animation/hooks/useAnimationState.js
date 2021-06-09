import { useReducer } from "react";

const initialState = {
    animationStart: true,
    animationPlaying: false,
    animationEnd: false,
    animationIndex: 0,
};

const reducer = (animationState, action) => {
    switch (action.type) {
        case "LOAD ANIMATION":
            return {
                ...initialState,
            };
        case "START ANIMATION":
            console.log(animationState);
            return {
                animationStart: false,
                animationPlaying: true,
                animationEnd: false,
                animationIndex: animationState.animationIndex,
            };
        case "PLAY ANIMATION":
            return {
                ...animationState,
                animationIndex: animationState.animationIndex + 1,
            };
        case "PAUSE ANIMATION":
            return {
                ...animationState,
                animationPlaying: false,
            };
        case "CHANGE ITEM":
            return {
                ...animationState,
                animationIndex: action.payload,
            };
        case "END ANIMATION":
            return {
                animationStart: false,
                animationPlaying: false,
                animationEnd: true,
                animationIndex: 0,
            };
        default:
            return animationState;
    }
};

function useAnimationState() {
    const [animationState, changeAnimationState] = useReducer(
        reducer,
        initialState
    );

    return [animationState, changeAnimationState];
}
export default useAnimationState;
