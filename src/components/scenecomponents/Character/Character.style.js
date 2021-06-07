import styled from "styled-components";

const StyledCharacter = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colors.primaryLight};
    border: 4px solid ${(props) => props.color};
    border-radius: 1.5rem;

    font-size: 1.5rem;
    font-family: ${(props) => props.theme.fonts.sansSerif};

    &:hover {
        cursor: pointer;
    }
`;

const CharacterImage = styled.img`
    width: 90%;
`;

const CharacterName = styled.p`
    font-size: inherit;
`;

export { StyledCharacter, CharacterImage, CharacterName };
