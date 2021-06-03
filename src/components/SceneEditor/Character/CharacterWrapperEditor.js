import React from "react";
import styled from "styled-components";

const CharacterWrapperEditorContainer = styled.div``;

function CharacterWrapperEditor({ children }) {
    return (
        <CharacterWrapperEditorContainer>
            {children}
        </CharacterWrapperEditorContainer>
    );
}

export default CharacterWrapperEditor;
