import React, { useContext } from "react";
import styled from "styled-components";
import { SceneContext } from "../../../context/SceneContextProvider";
import { EditButton } from "../../modularcomponents/Buttons";

const HeaderEditorContainer = styled.div`
    width: 100%;
    font-size: ${(props) => props.theme.fonts.fontSizes.header2Small};
    text-align: center;
    padding: 0.4em;
`;

function HeaderEditor() {
    const { sceneState } = useContext(SceneContext);
    return (
        <HeaderEditorContainer>
            {sceneState.header}
            <EditButton />
        </HeaderEditorContainer>
    );
}

export default HeaderEditor;
