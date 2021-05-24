import React, { useState, useContext } from "react";
import { SceneContext } from "../../context/SceneContextProvider";
import styled from "styled-components";
import { StyledCharacter, CharacterImage } from "./Character.style";
import { characterImages, characterColors } from "../../data/characterdata";

const StyledEditCharacter = styled(StyledCharacter)`
    position: relative;
    width: 20rem;
    left: 20%;
`;

const CharacterImageSelector = styled.div`
    display: flex;
    align-items: center;
`;

const CharacterNameInput = styled.input`
    width: 8rem;
    font-family: ${(props) => props.theme.fonts.sansSerif};
`;

const CloseEdit = styled.div`
    font-size: 1.5rem;
    text-align: right;
    cursor: pointer;
`;

function EditCharacter({ character, toggleEdit }) {
    const [name, setName] = useState(character.name);

    const [imageIndex, setImageIndex] = useState(character.imageIndex);
    const [color, setColor] = useState(characterColors[character.colorIndex]);

    const changeImage = (action) => {
        switch (action) {
            case "next":
                setImageIndex((prevState) =>
                    prevState <= characterImages.length - 1 ? prevState + 1 : 0
                );
                console.log((imageIndex + 1) % 4);
                break;
            case "previous":
                setImageIndex((prevState) =>
                    prevState ? prevState - 1 : characterImages.length - 1
                );
                break;
            default:
                break;
        }
    };

    return (
        <StyledEditCharacter character={character} color={color}>
            <CloseEdit onClick={() => toggleEdit((prevState) => !prevState)}>
                X
            </CloseEdit>
            <CharacterImageSelector>
                <button
                    className="NextImage"
                    onClick={() => changeImage("previous")}
                >
                    Previous
                </button>
                <CharacterImage
                    src={characterImages[imageIndex]}
                    alt={character.name}
                />
                <button
                    className="NextImage"
                    onClick={() => changeImage("next")}
                >
                    Next
                </button>
            </CharacterImageSelector>
            <CharacterNameInput
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </StyledEditCharacter>
    );
}

export default EditCharacter;
