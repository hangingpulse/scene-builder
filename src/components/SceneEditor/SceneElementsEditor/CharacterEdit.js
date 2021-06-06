import React from "react";
import {
    CharacterEditContainer,
    StyledCharacterEdit,
} from "./SceneElementsEditor.style";
import { CharacterImage } from "../../scenecomponents/Character/Character.style";
import ColorSelection from "../../modularcomponents/ColorSelection";
import { TextArea } from "../../modularcomponents/Inputs";
import { characterColors, characterImages } from "../../../data/characterdata";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function CharacterEdit({ character }) {
    return (
        <CharacterEditContainer position={character.position}>
            <StyledCharacterEdit
                character={character}
                color={characterColors[character.colorIndex]}
            >
                <ColorSelection selectedColor={character.colorIndex} />
                <div className="ImageSelection">
                    <FaAngleLeft size="2em" />
                    <CharacterImage
                        src={characterImages[character.imageIndex]}
                        alt={character.name}
                    />
                    <FaAngleRight size="2em" />
                </div>
                <TextArea value={character.name} height="2.5rem" />
            </StyledCharacterEdit>
        </CharacterEditContainer>
    );
}

export default CharacterEdit;
