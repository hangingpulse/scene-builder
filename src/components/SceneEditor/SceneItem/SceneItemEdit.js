import React, { useState } from "react";
import styled from "styled-components";
import SceneItemBase from "../../scenecomponents/SceneItem.style";
import Button, {
    CloseButton,
    DeleteButton,
} from "../../modularcomponents/Buttons";
import { NumberInput, TextArea } from "../../modularcomponents/Inputs";
import Toggle from "../../modularcomponents/Toggle";
import { SceneItemEditContainer } from "./SceneItem.style";
import CharacterSelection from "./CharacterSelection";

// HideSceneToggle: Modular Component
// ChangeLengthInput: Modular Component, NumberInput
// TextInput: Modular Component, small Text Area

function SceneItemEdit({ sceneItem, character, toggleEditSceneItem }) {
    const [text, setText] = useState(sceneItem.text);
    const [length, setLength] = useState(sceneItem.length);
    const [selectedCharacter, setSelectedCharacter] = useState(
        character ? character.id : null
    );

    const closeEdit = () => {
        toggleEditSceneItem(false);
    };

    const hideItem = () => {
        console.log("hideItem");
    };

    return (
        <SceneItemEditContainer sceneItem={sceneItem} character={character}>
            <div className="CloseButton">
                <CharacterSelection
                    selectedCharacter={selectedCharacter}
                    setSelectedCharacter={setSelectedCharacter}
                />
                <CloseButton onClick={closeEdit} />
            </div>
            <TextArea value={text} onChange={(e) => setText(e.target.value)} />

            <div className="EditButtons">
                <NumberInput
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                >
                    Length
                </NumberInput>
                <Toggle width="12rem" onClick={hideItem}>
                    Show Item
                </Toggle>
                <DeleteButton size="2em" />
            </div>
        </SceneItemEditContainer>
    );
}

export default SceneItemEdit;
