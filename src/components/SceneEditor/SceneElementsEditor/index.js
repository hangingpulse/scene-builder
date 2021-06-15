import React, { useContext, useState } from "react";
import { SceneEditorContext } from "../../../context/SceneEditorContext";
import { SceneContext } from "../../../context/SceneContext";
import CharacterEdit from "./CharacterEdit";
import CharacterSlot from "./CharacterSlot";
import { TextArea } from "../../modularcomponents/Inputs";
import Button from "../../modularcomponents/Buttons";
import {
    SceneElementsEditorContainer,
    HeaderInputContainer,
} from "./SceneElementsEditor.style";

// lets you edit your Header, background and characters

function SceneElementsEditor() {
    const { editorState } = useContext(SceneEditorContext);
    const { dispatch, sceneState } = useContext(SceneContext);
    const [header, setHeader] = useState(editorState.general.header);
    const [characters, setCharacters] = useState(editorState.characters);

    console.log(sceneState.characters, characters);
    const slotPositions = [0, 1, 2, 3];

    // Updates all the new Scene Element changes at once
    const updateSceneElements = () => {
        dispatch({
            type: "UPDATE SCENEELEMENTS",
            payload: {
                header,
                characters,
            },
        });
    };

    // Should reset all Scene elements to intitial state
    const resetSceneElements = () => {
        setCharacters([...editorState.characters]);
        setHeader(editorState.header);
    };

    const fillSlots = () => {
        return slotPositions.map((slot, index) => {
            const currentCharacter = characters.find(
                (character) => character.position === slot
            );
            return (
                <CharacterSlot
                    key={index}
                    position={slot}
                    characters={characters}
                    setCharacters={setCharacters}
                >
                    {currentCharacter ? (
                        <CharacterEdit
                            currentCharacter={currentCharacter}
                            characters={characters}
                            setCharacters={setCharacters}
                        />
                    ) : (
                        ""
                    )}
                </CharacterSlot>
            );
        });
    };

    return (
        <SceneElementsEditorContainer>
            <HeaderInputContainer>
                <TextArea
                    maxChar={50}
                    value={header || ""}
                    onChange={(e) => setHeader(e.target.value.toUpperCase())}
                    height="3.6rem"
                />
                <Button highlighted onClick={resetSceneElements}>
                    Reset
                </Button>
                <Button highlighted onClick={updateSceneElements}>
                    Update
                </Button>
            </HeaderInputContainer>

            {fillSlots()}
        </SceneElementsEditorContainer>
    );
}

export default SceneElementsEditor;
