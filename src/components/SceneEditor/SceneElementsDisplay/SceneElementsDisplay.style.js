import styled from "styled-components";

const SceneElementsDisplayContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    & .HeaderAndButton {
        display: flex;
    }
`;

const HeaderDisplayContainer = styled.div`
    width: 100%;
    font-size: ${(props) => props.theme.fonts.fontSizes.header2Small};
    text-align: center;
    padding: 0.2em;
    margin: 0.4em 0.4em;
    background-color: ${({ theme }) => theme.colors.primaryLight};
    border-radius: 0.8em;
    box-shadow: ${({ theme }) => theme.boxShadows.lowLevelTop};
`;

const CharacterDisplayContainer = styled.div`
    position: relative;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(${({ characters }) => characters}, 1fr);
    gap: 0.4em;

    padding: 0.8em 0;
`;

const CharacterWrapperDisplay = styled.div`
    max-width: 12em;
    justify-self: center;
`;

export {
    SceneElementsDisplayContainer,
    HeaderDisplayContainer,
    CharacterDisplayContainer,
    CharacterWrapperDisplay,
};
