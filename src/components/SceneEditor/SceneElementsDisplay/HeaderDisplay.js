import React, { useContext } from "react";
import { SceneContext } from "../../../context/SceneContext";
import { HeaderDisplayContainer } from "./SceneElementsDisplay.style";

function HeaderDisplay() {
    const { sceneState } = useContext(SceneContext);
    return <HeaderDisplayContainer>{sceneState.header}</HeaderDisplayContainer>;
}

export default HeaderDisplay;
