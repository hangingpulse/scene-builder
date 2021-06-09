import React from "react";
import useFetchAllScenes from "./hooks/useFetchAllScenes";
import SceneLibrary from "./SceneLibrary";
import SceneList from "./SceneList";
import AboutSection from "./AboutSection";
import { LandingPageContainer, GalleryContainer } from "./LandingPage.style";

function LandingPage() {
    const allScenes = useFetchAllScenes();

    return (
        <LandingPageContainer>
            <SceneList allScenes={allScenes} />
            <GalleryContainer>
                <SceneLibrary allScenes={allScenes} />
            </GalleryContainer>
            <AboutSection />
        </LandingPageContainer>
    );
}

export default LandingPage;
