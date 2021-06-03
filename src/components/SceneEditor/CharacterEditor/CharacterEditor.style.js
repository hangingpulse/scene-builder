import styled from "styled-components";

const CharacterEditorContainer = styled.div`
    position: relative;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(${({ characters }) => characters}, 1fr);
    gap: 0.4em;

    padding: 0.8em 0;
    border-bottom: 2px solid ${({ theme }) => theme.colors.highlight};
    border-top: 2px dotted ${({ theme }) => theme.colors.highlight};
`;

const BlurOverlay = styled.div`
    position: absolute;
    bottom: 0;
    transform: translateY(100%);
    width: 100%;
    background: linear-gradient(
        to top,
        rgba(255, 255, 255, 0),
        ${({ theme }) => theme.colors.primary}
    );
    height: 2em;
    z-index: 10;
`;

export { CharacterEditorContainer, BlurOverlay };
