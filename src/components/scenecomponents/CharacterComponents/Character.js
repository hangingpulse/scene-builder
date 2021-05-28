import React from "react";
import {
    StyledCharacter,
    CharacterImage,
    CharacterName,
} from "./Character.style";
import { characterColors, characterImages } from "../../../data/characterdata";

function Character({ character }) {
    return (
        <StyledCharacter
            character={character}
            color={characterColors[character.colorIndex]}
        >
            <CharacterImage
                src={characterImages[character.imageIndex]}
                alt={character.name}
            />
            <CharacterName>{character.name}</CharacterName>
        </StyledCharacter>
    );
}

export default Character;
