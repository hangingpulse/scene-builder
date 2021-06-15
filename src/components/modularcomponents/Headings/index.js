import React from "react";
import {
    SectionHeadingContainer,
    SmallHeadingContainer,
    TitleHeadingContainer,
} from "./Headings.style";

function SmallHeading({ children, highlight }) {
    return <SmallHeadingContainer highlight>{children}</SmallHeadingContainer>;
}

function SectionHeading({ children }) {
    return <SectionHeadingContainer>{children}</SectionHeadingContainer>;
}

function TitleHeading({ children }) {
    return <TitleHeadingContainer>{children}</TitleHeadingContainer>;
}

export { SmallHeading, SectionHeading, TitleHeading };
