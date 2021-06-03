import React, { useContext, useState } from "react";
import { SceneContext } from "../../../context/SceneContextProvider";
import { CharacterContainer } from "../../scenecomponents/Character/Character.style";
import EditCharacterModal from "../Character/EditCharacterModal";
import Character from "../../scenecomponents/Character";

function CharacterEditor() {
    const { sceneState, dispatch } = useContext(SceneContext);

    const [modal, setModal] = useState(false);
    const [selectedCharacter, setSelectedCharacter] = useState({});

    const openEdit = (character, index) => {
        setSelectedCharacter({ character, index });
        setModal(true);
    };

    return (
        <CharacterContainer>
            {modal && selectedCharacter ? (
                <EditCharacterModal
                    setModal={setModal}
                    selectedCharacter={selectedCharacter}
                    changeScene={dispatch}
                />
            ) : (
                ""
            )}

            {sceneState.characters.map((character, index) => (
                <div key={index} onClick={() => openEdit(character, index)}>
                    <Character character={character} />
                </div>
            ))}
        </CharacterContainer>
    );
}

export default CharacterEditor;

/*
PURPOSE: This Component renders the different Characters for the Scene Editor. 

If one of the characters is clicked it opens up a modal to edit this character

*/
