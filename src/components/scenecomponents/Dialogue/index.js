import React from "react";
import { DialogueContainer } from "./Dialogue.style";

function Dialogue({ dialogue, character }) {
    return (
        <DialogueContainer character={character} dialogue={dialogue}>
            {dialogue.text}
        </DialogueContainer>
    );
}

export default Dialogue;
