import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import ColorSelection from "../../SceneEditor/ColorSelection";
import { CharacterImage } from "./Character.style";
import {
    StyledEditCharacter,
    CharacterImageSelector,
    CharacterNameInput,
} from "./EditCharacter.style";
import { characterImages, characterColors } from "../../../data/characterdata";

function EditCharacter({ characterState, editCharacterState }) {
    return (
        <StyledEditCharacter
            character={characterState}
            color={characterColors[characterState.colorIndex]}
        >
            <ColorSelection
                editCharacterState={editCharacterState}
                selectedColor={characterState.colorIndex}
            />
            <CharacterImageSelector>
                <FaAngleLeft
                    size={25}
                    onClick={() =>
                        editCharacterState({ type: "PREVIOUS IMAGE" })
                    }
                />
                <CharacterImage
                    src={characterImages[characterState.imageIndex]}
                    alt={characterState.name}
                />
                <FaAngleRight
                    size={25}
                    onClick={() => editCharacterState({ type: "NEXT IMAGE" })}
                />
            </CharacterImageSelector>
            <CharacterNameInput
                autoFocus
                value={characterState.name}
                onChange={(e) =>
                    editCharacterState({
                        type: "CHANGE NAME",
                        payload: e.target.value.toUpperCase(),
                    })
                }
            />
        </StyledEditCharacter>
    );
}

export default EditCharacter;
