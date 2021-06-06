import React from "react";
import { SceneElementsDisplayContainer } from "./SceneElementsDisplay.style";
import HeaderDisplay from "./HeaderDisplay";
import CharacterDisplay from "./CharacterDisplay.js";

function SceneElementsDisplay() {
    return (
        <SceneElementsDisplayContainer>
            <HeaderDisplay />
            <CharacterDisplay />
        </SceneElementsDisplayContainer>
    );
}

export default SceneElementsDisplay;
