import React, { useContext } from "react";
import { SceneContext } from "../../../context/SceneContextProvider";
import { EditButton } from "../../modularcomponents/Buttons";
import { HeaderDisplayContainer } from "./SceneElementsDisplay.style";

function HeaderDisplay() {
    const { sceneState } = useContext(SceneContext);
    return (
        <HeaderDisplayContainer>
            {sceneState.header}
            <EditButton />
        </HeaderDisplayContainer>
    );
}

export default HeaderDisplay;
