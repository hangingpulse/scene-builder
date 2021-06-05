import React, { useState } from "react";
import styled from "styled-components";
import SceneComponent from "../../scenecomponents/SceneComponentWrapper/SceneComponent";
import SceneItemWrapper from "./SceneItemWrapper";
import SceneItemEdit from "./SceneItemEdit";

const SceneItemContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
`;
// Build in the Edit Toggle on this mode? Connect the delay and the scene item on this level

function SceneItem({ sceneItem, character, characterCount }) {
    const [editSceneItem, toggleEditSceneItem] = useState(true);

    return (
        <SceneItemContainer>
            {editSceneItem ? (
                <SceneItemEdit
                    character={character}
                    sceneItem={sceneItem}
                    toggleEditSceneItem={toggleEditSceneItem}
                />
            ) : (
                <SceneItemWrapper
                    characterCount={characterCount}
                    characterPosition={character ? character.position : 5}
                >
                    <SceneComponent
                        sceneItem={sceneItem}
                        character={character}
                        onClick={() => toggleEditSceneItem(true)}
                    />
                </SceneItemWrapper>
            )}
        </SceneItemContainer>
    );
}

export default SceneItem;
