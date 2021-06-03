import React, { useContext } from "react";
import styled from "styled-components";
import { SceneEditorContext } from "../../../context/SceneEditorContext";

import DelayItem from "../../scenecomponents/DelayItem";
import SceneItem from "../SceneItem";

const SceneItemEditorContainer = styled.div`
    width: 100%;
`;

function SceneItemEditor() {
    const { editorState } = useContext(SceneEditorContext);

    // Select the Character for each Speechbubble by matching names
    const findCharacter = (characterId) => {
        return editorState.characters.find(
            (character) => character.id === characterId
        );
    };

    // Renders the whole list of sceneitems and attaches a delay item to everyone of them
    const renderDialogue = () => {
        const sceneArray = editorState.dialogue.map((dialogue, index) => {
            if (dialogue.type === "ACTIONTEXT") {
                return (
                    <div key={index}>
                        <DelayItem editorIndex={index} />
                        <SceneItem
                            key={index}
                            editorIndex={index}
                            sceneItem={dialogue}
                            character={findCharacter(dialogue.character)}
                        />
                    </div>
                );
            }
            if (dialogue.type === "PARENTHETICAL") {
                return (
                    <div key={index}>
                        <DelayItem editorIndex={index} />
                        <SceneItem
                            key={index}
                            editorIndex={index}
                            sceneItem={dialogue}
                            character={findCharacter(dialogue.character)}
                        />
                    </div>
                );
            }
            if (dialogue.type === "DIALOGUE") {
                return (
                    <div key={index}>
                        <DelayItem editorIndex={index} />
                        <SceneItem
                            key={index}
                            editorIndex={index}
                            sceneItem={dialogue}
                            character={findCharacter(dialogue.character)}
                        />
                    </div>
                );
            }
            return "";
        });
        sceneArray.push(
            <DelayItem
                key={sceneArray.length + 1}
                editorIndex={sceneArray.length + 1}
            />
        );
        return sceneArray;
    };
    return (
        <SceneItemEditorContainer>{renderDialogue()}</SceneItemEditorContainer>
    );
}

export default SceneItemEditor;

/*
PURPOSE: This component renders the list of Speechbubbles together with their EditMode.


*/
