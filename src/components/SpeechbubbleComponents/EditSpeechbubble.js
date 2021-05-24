import React, { useState, useContext } from "react";
import styled from "styled-components";
import { SceneContext } from "../../context/SceneContextProvider";
import StyledSpeechbubble from "./Speechbubble.style";

const StyledEditSpeechbubble = styled(StyledSpeechbubble)`
    position: relative;
    transform: translateX(${(props) => (props.leftBubble ? "2rem" : "-2rem")})
        scale(1.2);
    padding: 1rem;
    width: 18rem;
`;

const CloseEdit = styled.div`
    font-size: 1.5rem;
    text-align: right;
    cursor: pointer;
`;

const DialogueInput = styled.textarea`
    margin: 0.5rem;
    padding: 0.3rem;
    width: 15rem;
    font-family: ${(props) => props.theme.fonts.sansSerif};
`;

function EditSpeechbubble({
    dialogue,
    character,
    indexBubble,
    toggleEditMode,
}) {
    const [editedText, setEditedText] = useState(dialogue.text);
    const { dispatch } = useContext(SceneContext);

    const saveChange = () => {
        const editedBubble = { ...dialogue, text: editedText };
        console.log(editedBubble);
        dispatch({
            type: "EDIT BUBBLE",
            payload: { bubble: editedBubble, index: indexBubble },
        });
        toggleEditMode(false);
    };

    return (
        <StyledEditSpeechbubble
            leftBubble={dialogue.leftBubble}
            character={character}
        >
            <CloseEdit onClick={saveChange}>X</CloseEdit>
            <DialogueInput
                autoFocus
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
            />
        </StyledEditSpeechbubble>
    );
}

export default EditSpeechbubble;
