import React, { useState } from "react";
import StyledSpeechbubble from "../Animation/Speechbubble.style";
import EditSpeechbubble from "./EditSpeechbubble";

function EditorSpeechbubble({ dialogue, indexBubble }) {
    const [editMode, toggleEditMode] = useState(false);

    return (
        <div className="EditorSpeechbubble">
            {!editMode ? (
                <StyledSpeechbubble
                    leftBubble={dialogue.leftBubble}
                    onClick={() => toggleEditMode((prevState) => !prevState)}
                >
                    {dialogue.text}
                </StyledSpeechbubble>
            ) : (
                <EditSpeechbubble
                    dialogue={dialogue}
                    toggleEditMode={toggleEditMode}
                    indexBubble={indexBubble}
                />
            )}
        </div>
    );
}

export default EditorSpeechbubble;
