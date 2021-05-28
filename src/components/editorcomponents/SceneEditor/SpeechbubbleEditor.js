import React, { useContext } from "react";
import { SceneContext } from "../../context/SceneContextProvider";
import Actiontext from "../../scenecomponents/ActiontextComponents/Actiontext";
import Parenthetical from "../../scenecomponents/ParentheticalComponents/Parenthetical";
import SpeechbubbleEditorItem from "./SpeechbubbleEditorItem";

function EditorSpeechbubble() {
    const { sceneState } = useContext(SceneContext);

    console.log(sceneState);
    // Select the Character for each Speechbubble by matching names
    const findCharacter = (characterId) => {
        return sceneState.characters.find(
            (character) => character.id === characterId
        );
    };

    const renderDialogue = () => {
        sceneState.dialogue.map((dialogue, index) => {
            console.log(dialogue);
            if (dialogue.type === "ACTIONTEXT") {
                return <Actiontext key={index} actiontext={dialogue} />;
            }
            if (dialogue.type === "PARENTHETICAL") {
                console.log(dialogue);
                return (
                    <Parenthetical
                        key={index}
                        character={findCharacter(dialogue.character)}
                        parenthetical={dialogue}
                    />
                );
            }
            if (dialogue.type === "DIALOGUE") {
                console.log(dialogue);
                return (
                    <SpeechbubbleEditorItem
                        key={index}
                        dialogue={dialogue}
                        character={findCharacter(dialogue.character)}
                        indexBubble={index}
                    />
                );
            }
            return "";
        });
    };

    return <div className="SpeechbubbleEditor">{renderDialogue()}</div>;
}

export default EditorSpeechbubble;

/*
PURPOSE: This component renders the list of Speechbubbles together with their EditMode.


*/
