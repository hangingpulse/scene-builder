import React, { useState } from "react";
import styled from "styled-components";
import Modal from "../modularcomponents/Modal";
import SceneItemEditor from "./SceneItemEditor";
import SceneElementsDisplay from "./SceneElementsDisplay";
import SceneElementsEditor from "./SceneElementsEditor";
import InfoBox, {
    InfoBoxHeader,
    InfoBoxText,
} from "../modularcomponents/InfoBox";

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
    const [helpModal, toggleHelpModal] = useState(false);

    return (
        <SceneEditorContainer>
            {helpModal && (
                <Modal toggleModal={toggleHelpModal}>
                    <InfoBox>
                        <InfoBoxHeader>Edit your Sceeny</InfoBoxHeader>
                        <InfoBoxText>
                            You can tweak your written Sceeny here or even build
                            it from scratch
                        </InfoBoxText>
                        <InfoBoxText>
                            You can add new characters and change their color or
                            appearance.
                        </InfoBoxText>
                        <InfoBoxText>
                            You can add new scene items, change if it's dialogue
                            or action text. You can also edit the length or even
                            add a pause inbetween items. Because sometimes
                            people just don't know what to say.
                        </InfoBoxText>
                        <InfoBoxText>
                            Now, go ahead, and finish your Sceeny. Below the
                            Animation Preview you find the Share Button.
                        </InfoBoxText>
                    </InfoBox>
                </Modal>
            )}

            {editModal && (
                <Modal toggleModal={toggleEditModal}>
                    <SceneElementsEditor />
                </Modal>
            )}
            <SceneElementsDisplay
                toggleEditModal={toggleEditModal}
                toggleHelpModal={toggleHelpModal}
            />
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
