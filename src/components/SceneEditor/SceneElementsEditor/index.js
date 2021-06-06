import React, { useContext, useState } from "react";
import { SceneEditorContext } from "../../../context/SceneEditorContext";
import { SceneContext } from "../../../context/SceneContextProvider";
import CharacterEdit from "./CharacterEdit";
import CharacterSlot from "./CharacterSlot";
import { TextArea } from "../../modularcomponents/Inputs";
import {
    SceneElementsEditorContainer,
    HeaderInputContainer,
} from "./SceneElementsEditor.style";

// lets you edit your Header, background and characters

function SceneElementsEditor() {
    const { editorState } = useContext(SceneEditorContext);
    const { dispatch } = useContext(SceneContext);
    const [header, setHeader] = useState(editorState.header);

    const slotPositions = [0, 1, 2, 3];

    console.log(editorState.characters);

    const fillSlots = () => {
        return slotPositions.map((slot, index) => {
            const currentCharacter = editorState.characters.find(
                (character) => character.position === slot
            );
            return (
                <CharacterSlot key={index} position={slot}>
                    {currentCharacter ? (
                        <CharacterEdit character={currentCharacter} />
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
                    value={header}
                    onChange={(e) => setHeader(e.target.value)}
                    height="2.4rem"
                />
            </HeaderInputContainer>

            {fillSlots()}
        </SceneElementsEditorContainer>
    );
}

export default SceneElementsEditor;
