import React from "react";
import styled from "styled-components";
import DelayItem from "../../scenecomponents/DelayItem";
import SceneComponent from "../../scenecomponents/SceneComponentWrapper/SceneComponent";

const SceneItemContainer = styled.div`
    width: 100%;
    display: grid;
`;
// Build in the Edit Toggle on this mode? Connect the delay and the scene item on this level

function SceneItem({ sceneItem, character }) {
    return (
        <SceneItemContainer>
            <SceneComponent sceneItem={sceneItem} character={character} />
        </SceneItemContainer>
    );
}

export default SceneItem;
