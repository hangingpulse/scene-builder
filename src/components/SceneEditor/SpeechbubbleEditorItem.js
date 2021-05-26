import React, { useState } from "react";
import EditSpeechbubble from "../SpeechbubbleComponents/EditSpeechbubble";
import StyledSpeechbubble from "../SpeechbubbleComponents/Speechbubble.style";

function SpeechbubbleEditorItem({ dialogue, character, indexBubble }) {
    const [edit, toggleEdit] = useState(false);

    return (
        <div className="EditOrViewSpeechbubble">
            {!edit ? (
                <StyledSpeechbubble
                    leftBubble={dialogue.leftBubble}
                    onClick={() => toggleEdit((prevState) => !prevState)}
                    character={character}
                >
                    {dialogue.text}
                </StyledSpeechbubble>
            ) : (
                <EditSpeechbubble
                    dialogue={dialogue}
                    character={character}
                    toggleEditMode={toggleEdit}
                    indexBubble={indexBubble}
                />
            )}
        </div>
    );
}

export default SpeechbubbleEditorItem;