import React, { useContext } from "react";
import { SceneEditorContext } from "../../../context/SceneEditorContext";
import { characterColors } from "../../../data/characterdata";
import { CharacterSelectionContainer, CharacterItem } from "./SceneItem.style";

function CharacterSelection({ selectedCharacter, changeSceneItem }) {
    const { editorState } = useContext(SceneEditorContext);
    return (
        <CharacterSelectionContainer>
            {editorState.characters.map((character, index) => (
                <CharacterItem
                    selected={
                        selectedCharacter
                            ? character.id === selectedCharacter
                            : false
                    }
                    character={character}
                    key={index}
                    onClick={() => changeSceneItem("CHARACTER", character.id)}
                >
                    {character.name}
                </CharacterItem>
            ))}
            <CharacterItem
                actiontext
                selected={!selectedCharacter}
                onClick={() => changeSceneItem("CHARACTER", null)}
            >
                ACTION
            </CharacterItem>
        </CharacterSelectionContainer>
    );
}

export default CharacterSelection;
