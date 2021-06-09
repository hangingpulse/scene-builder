import React from "react";
import AnimationGallery from "./AnimationGallery";
import { SceneLibraryContainer } from "./SceneLibrary.style";

function SceneLibrary() {
    return (
        <SceneLibraryContainer>
            <AnimationGallery />
        </SceneLibraryContainer>
    );
}

export default SceneLibrary;
