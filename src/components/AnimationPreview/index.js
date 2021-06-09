import React, { useContext } from "react";
import { PreviewContext } from "../../context/PreviewContext";
import Animation from "../Animation";
import { AnimationPreviewContainer } from "./AnimationPreview.style.js";
import SceneDescriptionInput from "./SceneDescriptionInput";

function AnimationPreview() {
    const { previewState } = useContext(PreviewContext);
    console.log(previewState);
    return (
        <AnimationPreviewContainer>
            {previewState && <Animation sceneObject={previewState} />}
            <SceneDescriptionInput />
        </AnimationPreviewContainer>
    );
}

export default AnimationPreview;
