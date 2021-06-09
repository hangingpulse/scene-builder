import React from "react";
import useFetchAllScenes from "./hooks/useFetchAllScenes";
import { SceneLibraryContextProvider } from "./context/SceneLibraryContext";
import SceneLibrary from "./SceneLibrary";
import SceneList from "./SceneList";
import AboutSection from "./AboutSection";
import {
    LandingPageContainer,
    GalleryContainer,
    CallToActionButton,
} from "./LandingPage.style";

function LandingPage() {
    return (
        <SceneLibraryContextProvider>
            <LandingPageContainer>
                <SceneList />
                <GalleryContainer>
                    <SceneLibrary />
                    <CallToActionButton highlighted>
                        CREATE YOUR OWN SCEENIE
                    </CallToActionButton>
                </GalleryContainer>
                <AboutSection />
            </LandingPageContainer>
        </SceneLibraryContextProvider>
    );
}

export default LandingPage;
