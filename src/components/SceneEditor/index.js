import React from "react";
import styled from "styled-components";
import { SceneEditorContextProvider } from "../../context/SceneEditorContext";
import SceneItemEditor from "./SceneItemEditor";
import CharacterEditor from "./CharacterEditor";
import HeaderEditor from "./HeaderEditor";

const SceneEditorContainer = styled.div`
    width: 100%;
    height: 85vh;
    display: flex;
    flex-direction: column;
    overflow: inherit;
`;

function SceneEditor() {
    return (
        <SceneEditorContainer>
            <HeaderEditor />
            <CharacterEditor />
            <SceneItemEditor />
        </SceneEditorContainer>
    );
}

export default SceneEditor;

/* 
PURPOSE:
The user can directly edit and fine tune the animation part of the scene here


NEXT STEPS:
-Build a styled Container for the Scene Editor
Build in a Background Editor?


*/
