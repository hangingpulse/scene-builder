import React from "react";
import styled from "styled-components";
import { SceneEditorContextProvider } from "../../context/SceneEditorContext";
import SceneItemEditor from "./SceneItemEditor";
import CharacterEditor from "./CharacterEditor";
import HeaderEditor from "./HeaderEditor";

const SceneEditorContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

function SceneEditor() {
    return (
        <SceneEditorContainer>
            <SceneEditorContextProvider>
                <HeaderEditor />
                <CharacterEditor />
                <SceneItemEditor />
            </SceneEditorContextProvider>
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
