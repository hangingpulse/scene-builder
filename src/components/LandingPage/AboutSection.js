import React from "react";
import { SmallHeading } from "../modularcomponents/Headings";
import { AboutContainer } from "./LandingPage.style";

function AboutSection() {
    return (
        <AboutContainer>
            <SmallHeading highlight position="fixed">
                About Sceenies
            </SmallHeading>
        </AboutContainer>
    );
}

export default AboutSection;
