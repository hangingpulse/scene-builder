import React from "react";
import styled from "styled-components";
import SceneComponent from "../../scenecomponents/SceneComponentWrapper/SceneComponent";
import SceneItemWrapper from "./SceneItemWrapper";

const SceneItemContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
`;
// Build in the Edit Toggle on this mode? Connect the delay and the scene item on this level

function SceneItem({ sceneItem, character, characterCount }) {
    return (
        <SceneItemContainer>
            <SceneItemWrapper
                characterCount={characterCount}
                characterPosition={character ? character.position : 5}
            >
                <SceneComponent sceneItem={sceneItem} character={character} />
            </SceneItemWrapper>
        </SceneItemContainer>
    );
}

export default SceneItem;
