import React, { useContext, useEffect, useState } from "react";
import Animation from "../Animation";
import { SectionHeading } from "../modularcomponents/Headings";
import { SceneLibraryContext } from "./context/SceneLibraryContext";
import SceneInformation from "./SceneInformation";
import { AnimationGalleryContainer } from "./SceneLibrary.style";

function AnimationGallery() {
    const { selectedScene } = useContext(SceneLibraryContext);

    const [selectedSceneObject, setSelectedSceneObject] =
        useState(selectedScene);

    useEffect(() => {
        if (selectedScene) {
            setSelectedSceneObject(selectedScene);
        }
    }, [selectedScene]);
    return (
        <AnimationGalleryContainer>
            <SectionHeading>View Sceenies</SectionHeading>
            {selectedSceneObject && (
                <>
                    <Animation sceneObject={selectedSceneObject} />
                    <SceneInformation sceneObject={selectedSceneObject} />
                </>
            )}
        </AnimationGalleryContainer>
    );
}

export default AnimationGallery;
