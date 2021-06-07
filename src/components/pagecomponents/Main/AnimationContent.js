import React from "react";
import Animation from "../../editorcomponents/Animation";
import AnimationControls from "../../editorcomponents/Animation/AnimationControls";
import { AnimationContentContainer } from "./Main.style.js";

function AnimationContent() {
    return (
        <AnimationContentContainer>
            <Animation />
            <AnimationControls />
        </AnimationContentContainer>
    );
}

export default AnimationContent;
