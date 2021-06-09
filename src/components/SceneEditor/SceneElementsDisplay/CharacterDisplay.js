import React, { useContext } from "react";
import { SceneEditorContext } from "../../../context/SceneEditorContext";
import Character from "../../scenecomponents/Character";
import {
    CharacterDisplayContainer,
    CharacterWrapperDisplay,
} from "./SceneElementsDisplay.style";

function CharacterDisplay() {
    const { editorState } = useContext(SceneEditorContext);

    return (
        <CharacterDisplayContainer characters={editorState.characters.length}>
            {editorState.characters.map(
                (character, index) =>
                    index < 4 && (
                        <CharacterWrapperDisplay key={index}>
                            <Character character={character} />
                        </CharacterWrapperDisplay>
                    )
            )}
        </CharacterDisplayContainer>
    );
}

export default CharacterDisplay;
