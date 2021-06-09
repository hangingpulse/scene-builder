import React from "react";
import { SceneListContainer } from "./LandingPage.style";
import SceneListItem from "./SceneListItem";

function SceneList({ allScenes }) {
    return (
        <SceneListContainer>
            {allScenes &&
                allScenes.map((scene, index) => (
                    <SceneListItem key={index} scene={scene} />
                ))}
        </SceneListContainer>
    );
}

export default SceneList;
