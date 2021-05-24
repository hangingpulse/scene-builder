import styled from "styled-components";

const CharacterContainer = styled.div`
    display: flex;
    justify-content: space-around;
`;

const StyledCharacter = styled.div`
    width: 12rem;
    height: 13rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colors.primaryLight};
    border: 3px solid ${(props) => props.color};
    border-radius: 1.5rem;

    font-size: 1.5rem;
    font-family: ${(props) => props.theme.fonts.sansSerif};

    &:hover {
        transform: scale(1.05);
        transition: transform 0.1s;
        cursor: pointer;
    }
`;

const CharacterImage = styled.img`
    width: 10rem;
`;

const CharacterName = styled.p`
    font-size: inherit;
`;

export { CharacterContainer, StyledCharacter, CharacterImage, CharacterName };
