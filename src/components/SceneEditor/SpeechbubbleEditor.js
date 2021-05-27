import React, { useContext } from "react";
import { SceneContext } from "../../context/SceneContextProvider";
import SpeechbubbleEditorItem from "./SpeechbubbleEditorItem";

function EditorSpeechbubble() {
    const { sceneState } = useContext(SceneContext);

    // Select the Character for each Speechbubble by matching names
    const findCharacter = (characterId) => {
        return sceneState.characters.find(
            (character) => character.id === characterId
        );
    };
    return (
        <div className="SpeechbubbleEditor">
            {sceneState.dialogue.map((dialogue, index) => (
                <SpeechbubbleEditorItem
                    key={index}
                    dialogue={dialogue}
                    character={findCharacter(dialogue.character)}
                    indexBubble={index}
                />
            ))}
        </div>
    );
}

export default EditorSpeechbubble;

/*
PURPOSE: This component renders the list of Speechbubbles together with their EditMode.


*/
