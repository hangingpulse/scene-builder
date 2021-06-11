import React, { useContext, useState } from "react";
import { SceneEditorContext } from "../../../context/SceneEditorContext";
import { CloseButton, DeleteButton } from "../../modularcomponents/Buttons";
import { NumberInput, TextArea } from "../../modularcomponents/Inputs";
import Toggle from "../../modularcomponents/Toggle";
import { SceneItemEditContainer } from "./SceneItem.style";
import CharacterSelection from "./CharacterSelection";

// HideSceneToggle: Modular Component
// ChangeLengthInput: Modular Component, NumberInput
// TextInput: Modular Component, small Text Area

function SceneItemEdit({
    sceneItem,
    character,
    toggleEditSceneItem,
    editorIndex,
}) {
    const [sceneItemState, setSceneItemState] = useState(sceneItem);

    const { deleteSceneItem, editSceneItem, editorState } =
        useContext(SceneEditorContext);

    const currentCharacter = editorState.characters.find(
        (character) => character.id === sceneItemState.character
    );

    const changeSceneItem = (type, value) => {
        switch (type) {
            case "TEXT":
                setSceneItemState({ ...sceneItemState, text: value });
                break;
            case "LENGTH":
                setSceneItemState({ ...sceneItemState, length: value });
                break;
            case "DISPLAY":
                setSceneItemState({ ...sceneItemState, display: value });
                break;
            case "CHARACTER":
                value
                    ? setSceneItemState({
                          ...sceneItemState,
                          character: value,
                          itemType: "DIALOGUE",
                      })
                    : setSceneItemState({
                          ...sceneItemState,
                          character: value,
                          itemType: "ACTIONTEXT",
                      });
                break;
            default:
                return;
        }
    };

    const setLength = (value) => {
        changeSceneItem("LENGTH", value);
    };

    const closeEdit = () => {
        toggleEditSceneItem(false);
        editSceneItem(sceneItemState, editorIndex);
    };

    return (
        <SceneItemEditContainer
            sceneItem={sceneItemState}
            character={currentCharacter}
        >
            <div className="CloseButton">
                <CharacterSelection
                    selectedCharacter={currentCharacter && currentCharacter.id}
                    changeSceneItem={changeSceneItem}
                />
                <CloseButton onClick={closeEdit} />
            </div>
            <TextArea
                maxChar={200}
                value={sceneItemState.text}
                onChange={(e) => changeSceneItem("TEXT", e.target.value)}
            />

            <div className="EditButtons">
                <NumberInput
                    value={sceneItemState.length}
                    setValue={setLength}
                    range={{ top: 9.9, bottom: 0 }}
                >
                    Length
                </NumberInput>
                <Toggle
                    width="12rem"
                    onClick={() =>
                        changeSceneItem("DISPLAY", !sceneItemState.display)
                    }
                    value={sceneItemState.display}
                >
                    Show Item
                </Toggle>
                <DeleteButton
                    size="2em"
                    onClick={() => deleteSceneItem(editorIndex)}
                />
            </div>
        </SceneItemEditContainer>
    );
}

export default SceneItemEdit;
