import React from "react";
import { SceneElementsDisplayContainer } from "./SceneElementsDisplay.style";
import HeaderDisplay from "./HeaderDisplay";
import CharacterDisplay from "./CharacterDisplay.js";
import { EditButton } from "../../modularcomponents/Buttons";

function SceneElementsDisplay({ toggleEditModal }) {
    return (
        <SceneElementsDisplayContainer>
            <div className="HeaderAndButton">
                <HeaderDisplay />
                <EditButton onClick={() => toggleEditModal(true)} />
            </div>
            <CharacterDisplay />
        </SceneElementsDisplayContainer>
    );
}

export default SceneElementsDisplay;
