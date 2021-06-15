import React, { useContext } from "react";
import { SceneContext } from "../../context/SceneContext";
import { PreviewContext } from "../../context/PreviewContext";
import Animation from "../Animation";
import { AnimationContentContainer } from "./AnimationEditor.style";
import Button from "../modularcomponents/Buttons";

function AnimationEditor() {
    const { sceneState } = useContext(SceneContext);
    const { togglePreview } = useContext(PreviewContext);
    return (
        <AnimationContentContainer>
            {sceneState && <Animation sceneObject={sceneState} />}
            <Button highlighted onClick={() => togglePreview(true)}>
                Preview and Share
            </Button>
        </AnimationContentContainer>
    );
}

export default AnimationEditor;
