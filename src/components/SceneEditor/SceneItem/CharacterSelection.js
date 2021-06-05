import React, { useContext } from "react";
import { SceneContext } from "../../../context/SceneContextProvider";
import { characterColors } from "../../../data/characterdata";
import { CharacterSelectionContainer, CharacterItem } from "./SceneItem.style";

function CharacterSelection({ selectedCharacter, setSelectedCharacter }) {
    const { sceneState } = useContext(SceneContext);
    console.log(selectedCharacter);
    return (
        <CharacterSelectionContainer>
            {sceneState.characters.map((character, index) => (
                <CharacterItem
                    selected={
                        selectedCharacter
                            ? character.id === selectedCharacter
                            : false
                    }
                    character={character}
                    key={index}
                    onClick={() => setSelectedCharacter(character.id)}
                >
                    {character.name}
                </CharacterItem>
            ))}
            <CharacterItem
                actiontext
                selected={!selectedCharacter}
                onClick={() => setSelectedCharacter(null)}
            >
                ACTION
            </CharacterItem>
        </CharacterSelectionContainer>
    );
}

export default CharacterSelection;
