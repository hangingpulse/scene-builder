import React, { useState } from "react";
import SceneComponent from "../../scenecomponents/SceneComponentWrapper/SceneComponent";
import SceneItemWrapper from "./SceneItemWrapper";
import SceneItemEdit from "./SceneItemEdit";
import { SceneItemContainer } from "./SceneItem.style";

// Build in the Edit Toggle on this mode? Connect the delay and the scene item on this level

function SceneItem({ sceneItem, character, characterCount, editorIndex }) {
    const [editSceneItem, toggleEditSceneItem] = useState(false);

    return (
        <SceneItemContainer>
            {editSceneItem ? (
                <SceneItemEdit
                    character={character}
                    sceneItem={sceneItem}
                    toggleEditSceneItem={toggleEditSceneItem}
                    editorIndex={editorIndex}
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
