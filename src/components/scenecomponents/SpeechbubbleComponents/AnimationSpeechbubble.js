import React, { useContext } from "react";
import StyledSpeechbubble from "./Speechbubble.style";
import { SceneContext } from "../../../context/SceneContextProvider";

function AnimationSpeechbubble({ controls, totalDelay, duration, dialogue }) {
    // Defining the SPeechbubble as a motion component happens in the style file
    const { sceneState } = useContext(SceneContext);
    console.log(sceneState);
    const getCharacter = () => {
        return sceneState.characters.find(
            (character) => character.id === dialogue.character
        );
    };

    return (
        <StyledSpeechbubble
            controls={controls}
            animate={controls}
            initial={{ opacity: 0 }}
            custom={{
                delay: totalDelay - duration,
                duration: duration,
            }}
            leftBubble={dialogue.leftBubble}
            character={getCharacter()}
        >
            {dialogue.text}
        </StyledSpeechbubble>
    );
}

export default AnimationSpeechbubble;
