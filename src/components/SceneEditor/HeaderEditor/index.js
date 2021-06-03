import React, { useContext } from "react";
import styled from "styled-components";
import { SceneContext } from "../../../context/SceneContextProvider";

const HeaderEditorContainer = styled.div`
    width: 100%;
    font-size: ${(props) => props.theme.fonts.fontSizes.header2Small};
    text-align: center;
    padding: 0.4em;
`;

function HeaderEditor() {
    const { sceneState } = useContext(SceneContext);
    return <HeaderEditorContainer>{sceneState.header}</HeaderEditorContainer>;
}

export default HeaderEditor;
