import React from "react";
import {
    InfoBoxContainer,
    InfoBoxHeaderContainer,
    InfoboxTextContainer,
} from "./InfoBox.style";

function InfoBox({ children }) {
    return <InfoBoxContainer>{children}</InfoBoxContainer>;
}
function InfoBoxHeader({ children }) {
    return <InfoBoxHeaderContainer>{children}</InfoBoxHeaderContainer>;
}

function InfoBoxText({ children, highlighted, large }) {
    return (
        <InfoboxTextContainer highlighted={highlighted} large={large}>
            {children}
        </InfoboxTextContainer>
    );
}

export default InfoBox;
export { InfoBoxHeader, InfoBoxText };
