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
    background-color: ${({ theme }) => theme.colors.primaryLight};
    box-shadow: ${({ theme }) => theme.boxShadows.editorInset};
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
    const renderSceneItem = () => {
        const sceneArray = editorState.sceneItems.map((sceneItem, index) => {
            if (sceneItem.itemType === "ACTIONTEXT") {
                return (
                    <SceneAndDelayItemWrapper key={index}>
                        <DelayItem
                            editorIndex={index}
                            sceneItemAfter={sceneItem}
                        />
                        <SceneItem
                            key={index}
                            editorIndex={index}
                            sceneItem={sceneItem}
                            character={findCharacter(sceneItem.character)}
                            characterCount={editorState.characters.length}
                        />
                    </SceneAndDelayItemWrapper>
                );
            }
            if (sceneItem.itemType === "PARENTHETICAL") {
                return (
                    <SceneAndDelayItemWrapper key={index}>
                        <DelayItem
                            editorIndex={index}
                            sceneItemAfter={sceneItem}
                        />
                        <SceneItem
                            key={index}
                            editorIndex={index}
                            sceneItem={sceneItem}
                            character={findCharacter(sceneItem.character)}
                            characterCount={editorState.characters.length}
                        />
                    </SceneAndDelayItemWrapper>
                );
            }
            if (sceneItem.itemType === "DIALOGUE") {
                return (
                    <SceneAndDelayItemWrapper key={index}>
                        <DelayItem
                            editorIndex={index}
                            sceneItemAfter={sceneItem}
                        />
                        <SceneItem
                            key={index}
                            editorIndex={index}
                            sceneItem={sceneItem}
                            character={findCharacter(sceneItem.character)}
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
        <SceneItemEditorContainer>{renderSceneItem()}</SceneItemEditorContainer>
    );
}

export default SceneItemEditor;

/*
PURPOSE: This component renders the list of Speechbubbles together with their EditMode.


*/
