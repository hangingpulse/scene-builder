import React from "react";
import StyledSpeechbubble from "./Speechbubble.style";

function AnimationSpeechbubble({ controls, totalDelay, duration, dialogue }) {
    // Defining the SPeechbubble as a motion component happens in the style file

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
        >
            {" "}
            {dialogue.text}
        </StyledSpeechbubble>
    );
}

export default AnimationSpeechbubble;
