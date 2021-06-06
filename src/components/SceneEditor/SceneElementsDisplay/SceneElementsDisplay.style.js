import styled from "styled-components";

const SceneElementsDisplayContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const HeaderDisplayContainer = styled.div`
    width: 100%;
    font-size: ${(props) => props.theme.fonts.fontSizes.header2Small};
    text-align: center;
    padding: 0.4em;
`;

const CharacterDisplayContainer = styled.div`
    position: relative;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(${({ characters }) => characters}, 1fr);
    gap: 0.4em;

    padding: 0.8em 0;
    border-bottom: 2px solid ${({ theme }) => theme.colors.highlight};
    border-top: 2px dotted ${({ theme }) => theme.colors.highlight};
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
