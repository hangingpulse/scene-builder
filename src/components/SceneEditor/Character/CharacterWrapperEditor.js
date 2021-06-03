import React from "react";
import styled from "styled-components";

const CharacterWrapperEditorContainer = styled.div`
    max-width: 12em;
    justify-self: center;
`;

function CharacterWrapperEditor({ children }) {
    return (
        <CharacterWrapperEditorContainer>
            {children}
        </CharacterWrapperEditorContainer>
    );
}

export default CharacterWrapperEditor;
