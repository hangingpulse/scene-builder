import React, { useContext } from "react";
import { SceneLibraryContext } from "../context/SceneLibraryContext";
import {
    SceneListItemContainer,
    SceneListItemCreator,
    SceneListItemDescription,
    SceneListItemTitle,
} from "./SceneList.style";

function SceneListItem({ scene }) {
    const { changeSelectedScene } = useContext(SceneLibraryContext);

    return (
        <SceneListItemContainer onClick={() => changeSelectedScene(scene._id)}>
            <SceneListItemTitle>{scene.title}</SceneListItemTitle>
            <SceneListItemCreator>
                {` by ${scene.meta.creator}`}
            </SceneListItemCreator>

            <SceneListItemDescription>
                {scene.meta.description}
            </SceneListItemDescription>
        </SceneListItemContainer>
    );
}

export default SceneListItem;
