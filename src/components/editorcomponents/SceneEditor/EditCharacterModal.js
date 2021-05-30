import React, { useContext } from "react";
import styled from "styled-components";
import { SceneContext } from "../../../context/SceneContextProvider";
import useEditCharacter from "../../../hooks/useEditCharacter";
import EditCharacter from "../../scenecomponents/CharacterComponents/EditCharacter";

const ModalContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 4;
`;

function EditCharacterModal({ setModal, selectedCharacter }) {
    const [characterState, editCharacterState] = useEditCharacter(
        selectedCharacter.character
    );

    const { dispatch } = useContext(SceneContext);

    const closeModal = (e) => {
        if (e.target === e.currentTarget) {
            dispatch({
                type: "EDIT CHARACTER",
                payload: {
                    index: selectedCharacter.index,
                    newCharacterState: characterState,
                },
            });
            setModal(false);
        }
    };

    return (
        <ModalContainer onClick={(e) => closeModal(e)}>
            <EditCharacter
                characterState={characterState}
                editCharacterState={editCharacterState}
            />
        </ModalContainer>
    );
}

export default EditCharacterModal;
