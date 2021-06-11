import React from "react";
import { SmallHeading } from "../modularcomponents/Headings";
import { AboutContainer } from "./LandingPage.style";
import { InfoBoxText, InfoBoxImage } from "../modularcomponents/InfoBox";
import { characterImages } from "../../data/characterdata";
import { InlineLink } from "../modularcomponents/Link";

function AboutSection() {
    return (
        <AboutContainer>
            <SmallHeading highlight position="fixed">
                About Sceenies
            </SmallHeading>
            <InfoBoxImage
                src={characterImages[3]}
                alt="Character Drawing"
                width="90%"
            />
            <InfoBoxText small>
                Hi, I'm Henning and I'm a web developer and a screenwriter.
                Connect to me on Github{" "}
                <InlineLink href="https://github.com/hangingpulse">
                    here
                </InlineLink>
                .
            </InfoBoxText>
            <InfoBoxText small>
                As a screenwriter you are sometimes only working for the trash
                bin and it feels like you never really have a finished work of
                art.
            </InfoBoxText>
            <InfoBoxText small>
                That's why I build this App. To let you create something
                finished that you can share and that doesn't look like a
                screenplay.
            </InfoBoxText>
            <InfoBoxText small>
                Also, you can ask the{" "}
                <InlineLink href="https://openai.com/">OpenAI</InlineLink> AI to
                continue scenes for you.
            </InfoBoxText>
            <InfoBoxText small>
                And also, the character art comes from{" "}
                <InlineLink href="https://www.instagram.com/pablostanley/">
                    Pablo Stanley
                </InlineLink>
                . It's an open library called{" "}
                <InlineLink href="https://www.openpeeps.com/">
                    Open Peeps
                </InlineLink>
                . It's awesome. Check it out.
            </InfoBoxText>
        </AboutContainer>
    );
}

export default AboutSection;
