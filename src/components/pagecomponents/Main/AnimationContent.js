import React, { useContext } from "react";
import { SceneContext } from "../../../context/SceneContextProvider";
import Animation from "../../editorcomponents/Animation";
import { AnimationContentContainer } from "./Main.style.js";

function AnimationContent() {
    const { sceneState } = useContext(SceneContext);

    return (
        <AnimationContentContainer>
            <Animation sceneObject={sceneState} />
            {/* <AnimationControls /> */}
        </AnimationContentContainer>
    );
}

export default AnimationContent;
