import React, { useContext } from "react";
import styled from "styled-components";
import { SceneEditorContext } from "../../../context/SceneEditorContext";

import DelayItem from "../DelayItem";
import SceneItem from "../SceneItem";
import SceneAndDelayItemWrapper from "./SceneAndDelayItemWrapper";

const SceneItemEditorContainer = styled.div`
    position: relative;
    width: 100%;
    height: 95vh;
    padding: 0 0.8rem;
    padding-top: 0.8em;
    padding-bottom: 10rem;
    background-color: ${({ theme }) => theme.colors.background};
    overflow: scroll;
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
                    <SceneAndDelayItemWrapper key={index}>
                        <DelayItem
                            editorIndex={index}
                            sceneItemAfter={dialogue}
                        />
                        <SceneItem
                            key={index}
                            editorIndex={index}
                            sceneItem={dialogue}
                            character={findCharacter(dialogue.character)}
                            characterCount={editorState.characters.length}
                        />
                    </SceneAndDelayItemWrapper>
                );
            }
            if (dialogue.type === "PARENTHETICAL") {
                return (
                    <SceneAndDelayItemWrapper key={index}>
                        <DelayItem
                            editorIndex={index}
                            sceneItemAfter={dialogue}
                        />
                        <SceneItem
                            key={index}
                            editorIndex={index}
                            sceneItem={dialogue}
                            character={findCharacter(dialogue.character)}
                            characterCount={editorState.characters.length}
                        />
                    </SceneAndDelayItemWrapper>
                );
            }
            if (dialogue.type === "DIALOGUE") {
                return (
                    <SceneAndDelayItemWrapper key={index}>
                        <DelayItem
                            editorIndex={index}
                            sceneItemAfter={dialogue}
                        />
                        <SceneItem
                            key={index}
                            editorIndex={index}
                            sceneItem={dialogue}
                            character={findCharacter(dialogue.character)}
                            characterCount={editorState.characters.length}
                        />
                    </SceneAndDelayItemWrapper>
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
