import React from "react";
import { SmallHeadingContainer } from "./Headings.style";

function SmallHeading({ children, highlight }) {
    return <SmallHeadingContainer highlight>{children}</SmallHeadingContainer>;
}

export { SmallHeading };
