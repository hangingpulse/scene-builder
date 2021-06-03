import styled from "styled-components";

const CharacterEditorContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(${({ characters }) => characters}, 1fr);
    gap: 0.4em;

    padding: 0.8em 0;
    border-bottom: 2px dotted ${({ theme }) => theme.colors.highlight};
    border-top: 2px dotted ${({ theme }) => theme.colors.highlight};
`;

export { CharacterEditorContainer };
