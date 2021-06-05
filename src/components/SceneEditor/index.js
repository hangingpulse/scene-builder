import React, { useState } from "react";
import styled from "styled-components";
import SceneItemEditor from "./SceneItemEditor";
import CharacterEditor from "./CharacterEditor";
import HeaderEditor from "./HeaderEditor";
import SceneElementsEditor from "./SceneElementsEditor";
import { EditButton } from "../modularcomponents/Buttons";

const SceneEditorContainer = styled.div`
    width: 100%;
    height: 85vh;
    display: flex;
    flex-direction: column;
    overflow: inherit;
`;

function SceneEditor() {
    const [editModal, toggleEditModal] = useState(true);

    return (
        <SceneEditorContainer>
            <EditButton onClick={() => toggleEditModal(true)} />
            {editModal && <SceneElementsEditor />}
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
