import React from "react";
import { SceneInformationContainer } from "./LandingPage.style";

function SceneInformation({ sceneObject }) {
    return (
        <SceneInformationContainer>
            <p className="Title">{sceneObject.title}</p>
            <p className="Creator">{sceneObject.meta.creator}</p>
            <p className="Description">{sceneObject.meta.description}</p>
        </SceneInformationContainer>
    );
}

export default SceneInformation;
