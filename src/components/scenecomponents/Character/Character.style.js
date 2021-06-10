import styled from "styled-components";

const StyledCharacter = styled.div`
    min-width: 15ch;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colors.primaryLight};
    background-color: ${({ color }) => color};
    border: 4px solid ${(props) => props.color};
    border: 2px solid black;
    border-radius: 1.5rem;
    box-shadow: 1px 1px 3px 1px black;

    font-size: 1.5rem;
    font-family: ${(props) => props.theme.fonts.sansSerif};

    overflow: hidden;

    &:hover {
        cursor: pointer;
    }

    /* Media Query to make font smaller on smaller screens */
`;

const CharacterImage = styled.img`
    width: 90%;
`;

const CharacterName = styled.p`
    width: 100%;
    padding: 0.4em 0;
    text-align: center;
    font-size: ${({ theme }) => theme.fonts.fontSizes.blockLarge};
    background-color: rgba(0, 0, 0, 0.5);
    color: ${({ theme }) => theme.colors.primaryLight};
`;

export { StyledCharacter, CharacterImage, CharacterName };
