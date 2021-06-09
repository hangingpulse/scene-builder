import React, { useContext } from "react";
import { SceneContext } from "../../context/SceneContext";
import Animation from "../Animation";
import { AnimationContentContainer } from "./AnimationEditor.style";

function AnimationEditor() {
    const { sceneState } = useContext(SceneContext);
    console.log(sceneState);
    return (
        <AnimationContentContainer>
            {sceneState && <Animation sceneObject={sceneState} />}
        </AnimationContentContainer>
    );
}

export default AnimationEditor;
