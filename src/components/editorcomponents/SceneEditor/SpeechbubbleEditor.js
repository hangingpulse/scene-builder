import React, { useContext } from "react";
import { SceneContext } from "../../../context/SceneContextProvider";
import Actiontext from "../../scenecomponents/Actiontext";
import DelayItem from "../../scenecomponents/DelayItem";
import Parenthetical from "../../scenecomponents/Parenthetical";
import SpeechbubbleEditorItem from "./SpeechbubbleEditorItem";

function EditorSpeechbubble() {
    const { sceneState } = useContext(SceneContext);

    // Select the Character for each Speechbubble by matching names
    const findCharacter = (characterId) => {
        return sceneState.characters.find(
            (character) => character.id === characterId
        );
    };

    const renderDialogue = () => {
        const sceneArray = sceneState.dialogue.map((dialogue, index) => {
            if (dialogue.type === "ACTIONTEXT") {
                return (
                    <>
                        <Actiontext key={index} actiontext={dialogue} />
                        <DelayItem />
                    </>
                );
            }
            if (dialogue.type === "PARENTHETICAL") {
                return (
                    <>
                        <Parenthetical
                            key={index}
                            character={findCharacter(dialogue.character)}
                            parenthetical={dialogue}
                        />
                        <DelayItem />
                    </>
                );
            }
            if (dialogue.type === "DIALOGUE") {
                return (
                    <>
                        <SpeechbubbleEditorItem
                            key={index}
                            dialogue={dialogue}
                            character={findCharacter(dialogue.character)}
                            indexBubble={index}
                        />
                        <DelayItem />
                    </>
                );
            }
            return "";
        });

        return sceneArray;
    };
    return <div className="SpeechbubbleEditor">{renderDialogue()}</div>;
}

export default EditorSpeechbubble;

/*
PURPOSE: This component renders the list of Speechbubbles together with their EditMode.


*/
