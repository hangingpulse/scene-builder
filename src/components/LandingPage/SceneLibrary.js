import React from "react";
import AnimationGallery from "./AnimationGallery";
import useFetchAllScenes from "./hooks/useFetchAllScenes";
import { SceneLibraryContainer } from "./SceneLibrary.style";

function SceneLibrary() {
    const allScenes = useFetchAllScenes();
    console.log(allScenes);
    return (
        <SceneLibraryContainer>
            <AnimationGallery allScenes={allScenes ? allScenes : ""} />
        </SceneLibraryContainer>
    );
}

export default SceneLibrary;
