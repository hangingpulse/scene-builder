import React, { useContext } from "react";
import { SmallHeading } from "../../modularcomponents/Headings";
import { SceneLibraryContext } from "../context/SceneLibraryContext";
import { SceneListContainer, SceneListItemsContainer } from "./SceneList.style";
import SceneListItem from "./SceneListItem";

function SceneList() {
    const { allScenes } = useContext(SceneLibraryContext);
    const reversedAllScenes = allScenes && allScenes.reverse();
    return (
        <SceneListContainer>
            <SmallHeading highlight position="fixed">
                Browse Scenes
            </SmallHeading>

            <SceneListItemsContainer>
                {reversedAllScenes &&
                    reversedAllScenes.map((scene, index) => (
                        <SceneListItem key={index} scene={scene} />
                    ))}
            </SceneListItemsContainer>
        </SceneListContainer>
    );
}

export default SceneList;
