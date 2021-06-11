import React, { useState } from "react";
import styled from "styled-components";
import Modal from "../modularcomponents/Modal";
import SceneItemEditor from "./SceneItemEditor";
import SceneElementsDisplay from "./SceneElementsDisplay";
import SceneElementsEditor from "./SceneElementsEditor";
import { EditButton } from "../modularcomponents/Buttons";

const SceneEditorContainer = styled.div`
    position: relative;
    width: 100%;
    height: 85vh;
    display: flex;
    flex-direction: column;
    overflow: inherit;

    & .EditButton {
        position: absolute;
        top: 0;
        right: 0;
    }
`;

function SceneEditor() {
    const [editModal, toggleEditModal] = useState(false);

    return (
        <SceneEditorContainer>
            {editModal && (
                <Modal
                    onClick={(e) =>
                        e.target === e.currentTarget && toggleEditModal(false)
                    }
                >
                    <SceneElementsEditor />
                </Modal>
            )}
            <SceneElementsDisplay toggleEditModal={toggleEditModal} />
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
