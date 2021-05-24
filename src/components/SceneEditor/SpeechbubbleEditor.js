import React, { useState } from "react";
import StyledSpeechbubble from "../Speechbubble/Speechbubble.style";
import EditSpeechbubble from "./EditSpeechbubble";

function EditorSpeechbubble({ dialogue, character, indexBubble }) {
    const [editMode, toggleEditMode] = useState(false);

    return (
        <div className="EditorSpeechbubble">
            {!editMode ? (
                <StyledSpeechbubble
                    leftBubble={dialogue.leftBubble}
                    onClick={() => toggleEditMode((prevState) => !prevState)}
                    character={character}
                >
                    {dialogue.text}
                </StyledSpeechbubble>
            ) : (
                <EditSpeechbubble
                    dialogue={dialogue}
                    character={character}
                    toggleEditMode={toggleEditMode}
                    indexBubble={indexBubble}
                />
            )}
        </div>
    );
}

export default EditorSpeechbubble;
