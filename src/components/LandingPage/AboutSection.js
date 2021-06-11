import React from "react";
import { SmallHeading } from "../modularcomponents/Headings";
import { AboutContainer } from "./LandingPage.style";
import { InfoBoxText } from "../modularcomponents/InfoBox";
import { characterImages } from "../../data/characterdata";

function AboutSection() {
    return (
        <AboutContainer>
            <SmallHeading highlight position="fixed">
                About Sceenies
            </SmallHeading>
            <img src={characterImages[3]} alt="" />
            <InfoBoxText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur cum eveniet esse laudantium magnam sed delectus
                dolores voluptate quis, voluptatem obcaecati sunt accusantium
                beatae illo, at dolorum voluptas doloribus soluta.
            </InfoBoxText>
        </AboutContainer>
    );
}

export default AboutSection;
