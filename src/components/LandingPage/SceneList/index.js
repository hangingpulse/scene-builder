import React, { useContext } from "react";
import { SmallHeading } from "../../modularcomponents/Headings";
import { SceneLibraryContext } from "../context/SceneLibraryContext";
import { SceneListContainer } from "./SceneList.style";
import SceneListItem from "./SceneListItem";

function SceneList() {
    const { allScenes } = useContext(SceneLibraryContext);
    console.log(allScenes);
    const reversedAllScenes = allScenes && allScenes.reverse();
    return (
        <SceneListContainer>
            <SmallHeading>Browse Scenes</SmallHeading>
            {reversedAllScenes &&
                reversedAllScenes.map((scene, index) => (
                    <SceneListItem key={index} scene={scene} />
                ))}
        </SceneListContainer>
    );
}

export default SceneList;
