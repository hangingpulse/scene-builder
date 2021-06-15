import React from "react";
import { SceneLibraryContextProvider } from "./context/SceneLibraryContext";
import SceneLibrary from "./SceneLibrary";
import SceneList from "./SceneList";
import AboutSection from "./AboutSection";
import { LandingPageContainer, GalleryContainer } from "./LandingPage.style";
import { TitleHeading } from "../modularcomponents/Headings";

function LandingPage() {
    return (
        <SceneLibraryContextProvider>
            <TitleHeading>Building Teeny Tiny Scenes</TitleHeading>
            <LandingPageContainer>
                <SceneList />
                <GalleryContainer>
                    <SceneLibrary />
                </GalleryContainer>
                <AboutSection />
            </LandingPageContainer>
        </SceneLibraryContextProvider>
    );
}

export default LandingPage;
