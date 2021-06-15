import React from "react";
import { SceneElementsDisplayContainer } from "./SceneElementsDisplay.style";
import HeaderDisplay from "./HeaderDisplay";
import CharacterDisplay from "./CharacterDisplay.js";
import { EditButton, HelpButton } from "../../modularcomponents/Buttons";

function SceneElementsDisplay({ toggleEditModal, toggleHelpModal }) {
    return (
        <SceneElementsDisplayContainer>
            <div className="HeaderAndButton">
                <HelpButton
                    onClick={() => toggleHelpModal((prevState) => !prevState)}
                />
                <HeaderDisplay />
                <EditButton onClick={() => toggleEditModal(true)} />
            </div>
            <CharacterDisplay />
        </SceneElementsDisplayContainer>
    );
}

export default SceneElementsDisplay;
