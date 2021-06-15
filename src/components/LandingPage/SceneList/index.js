import React, { useContext } from "react";
import { SmallHeading } from "../../modularcomponents/Headings";
import { SceneLibraryContext } from "../context/SceneLibraryContext";
import { SceneListContainer, SceneListItemsContainer } from "./SceneList.style";
import SceneListItem from "./SceneListItem";
import StyledLink from "../../modularcomponents/Link";
import { CallToActionButton } from "../LandingPage.style";

function SceneList() {
    const { allScenes } = useContext(SceneLibraryContext);
    return (
        <SceneListContainer>
            <StyledLink to="/create">
                <CallToActionButton highlighted>
                    CREATE YOUR OWN SCEENY
                </CallToActionButton>
            </StyledLink>

            <SmallHeading highlight position="fixed">
                Browse Sceenies
            </SmallHeading>

            <SceneListItemsContainer>
                {allScenes &&
                    allScenes.map((scene, index) => (
                        <SceneListItem key={index} scene={scene} />
                    ))}
            </SceneListItemsContainer>
        </SceneListContainer>
    );
}

export default SceneList;
