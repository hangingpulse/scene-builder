import React, { useContext } from "react";
import axios from "axios";
import { PreviewContext } from "../../../context/PreviewContext";
import AnimationContent from "../../pagecomponents/Main/AnimationContent";
import { AnimationPreviewContainer } from "./AnimationPreview.style.js";
import SceneDescriptionInput from "./SceneDescriptionInput";

function AnimationPreview() {
    const { previewState } = useContext(PreviewContext);
    console.log(previewState);
    return (
        <AnimationPreviewContainer>
            <AnimationContent animation={previewState} />
            <SceneDescriptionInput />
        </AnimationPreviewContainer>
    );
}

export default AnimationPreview;
