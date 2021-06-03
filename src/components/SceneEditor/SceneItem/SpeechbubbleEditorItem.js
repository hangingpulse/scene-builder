import React, { useState } from "react";
import EditSpeechbubble from "../../scenecomponents/Dialogue/EditSpeechbubble";
import Dialogue from "../../scenecomponents/Dialogue";

function SpeechbubbleEditorItem({ dialogue, character, indexBubble }) {
    const [edit, toggleEdit] = useState(false);

    return (
        <div className="EditOrViewSpeechbubble">
            {!edit && character ? (
                <Dialogue
                    onClick={() => toggleEdit((prevState) => !prevState)}
                    character={character}
                    dialogue={dialogue}
                />
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
