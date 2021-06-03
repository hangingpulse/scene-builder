import React, { useContext, useState } from "react";
import { SceneEditorContext } from "../../../context/SceneEditorContext";
import Character from "../../scenecomponents/Character";
import CharacterWrapperEditor from "../Character/CharacterWrapperEditor";
import { CharacterEditorContainer, BlurOverlay } from "./CharacterEditor.style";

function CharacterEditor() {
    const { editorState } = useContext(SceneEditorContext);

    const [modal, setModal] = useState(false);
    const [selectedCharacter, setSelectedCharacter] = useState({});

    const openEdit = (character, index) => {
        setSelectedCharacter({ character, index });
        setModal(true);
    };

    return (
        <CharacterEditorContainer characters={editorState.characters.length}>
            {editorState.characters.map((character, index) => (
                <CharacterWrapperEditor
                    key={index}
                    onClick={() => openEdit(character, index)}
                >
                    <Character character={character} />
                </CharacterWrapperEditor>
            ))}
            <BlurOverlay />
        </CharacterEditorContainer>
    );
}

export default CharacterEditor;

/*
            {modal && selectedCharacter ? (
                <EditCharacterModal
                    setModal={setModal}
                    selectedCharacter={selectedCharacter}
                />
            ) : (
                ""
            )}

*/
