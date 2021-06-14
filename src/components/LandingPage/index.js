import React from "react";
import { SceneLibraryContextProvider } from "./context/SceneLibraryContext";
import SceneLibrary from "./SceneLibrary";
import SceneList from "./SceneList";
import AboutSection from "./AboutSection";
import {
    LandingPageContainer,
    GalleryContainer,
    CallToActionButton,
} from "./LandingPage.style";
import StyledLink from "../modularcomponents/Link";

function LandingPage() {
    return (
        <SceneLibraryContextProvider>
            <LandingPageContainer>
                <SceneList />
                <GalleryContainer>
                    <SceneLibrary />
                    <CallToActionButton highlighted>
                        <StyledLink to="/create">
                            CREATE YOUR OWN SCEENY
                        </StyledLink>
                    </CallToActionButton>
                </GalleryContainer>
                <AboutSection />
            </LandingPageContainer>
        </SceneLibraryContextProvider>
    );
}

export default LandingPage;
