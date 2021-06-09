import React from "react";
import Animation from "../Animation";
import { AnimationGalleryContainer } from "./SceneLibrary.style";

function AnimationGallery({ allScenes }) {
    console.log(allScenes);
    return (
        <AnimationGalleryContainer>
            {allScenes && <Animation sceneObject={allScenes[0]} />}
        </AnimationGalleryContainer>
    );
}

export default AnimationGallery;
