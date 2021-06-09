import React from "react";
import { SceneListItemContainer } from "./SceneListItem.style";

function SceneListItem({ scene, setSelectedScene }) {
    console.log(scene);
    return (
        <SceneListItemContainer onClick={() => setSelectedScene(scene._id)}>
            {scene.title}
        </SceneListItemContainer>
    );
}

export default SceneListItem;
