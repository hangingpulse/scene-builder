import React from "react";
import {
    StyledCharacter,
    CharacterImage,
    CharacterName,
} from "./Character.style";

function Character({ character }) {
    return (
        <StyledCharacter character={character}>
            <CharacterImage src={character.image} alt={character.name} />
            <CharacterName>{character.name}</CharacterName>
        </StyledCharacter>
    );
}

export default Character;
