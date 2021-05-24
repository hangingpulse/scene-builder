import styled from "styled-components";

const StyledCharacter = styled.div`
    width: 12rem;
    height: 13rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.character.color};
    border: 1px solid black;
    border-radius: 1.5rem;
`;

const CharacterImage = styled.img`
    width: 10rem;
`;

const CharacterName = styled.p`
    font-size: 1.5rem;
`;

export { StyledCharacter, CharacterImage, CharacterName };
