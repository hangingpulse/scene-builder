import React from "react";
import styled from "styled-components";
import Dialogue from "../Dialogue";
import Actiontext from "../Actiontext";
import Parenthetical from "../Parenthetical";

// This Component is the Wrapper for every Scene Item
// There might be two different versions, depending on whether it is an Animation Item or a Scene Editor Item

// Container Styles, maybe outsource it into a styles.js
const SceneComponentContainer = styled.div``;

function SceneComponent({ sceneItem, character, animation, onClick }) {
    // fills the wrapper with the needed scene item
    const getDialogueComponent = () => {
        switch (sceneItem.type) {
            case "ACTIONTEXT":
                return (
                    <Actiontext actiontext={sceneItem} animation={animation} />
                );
            case "DIALOGUE":
                return <Dialogue character={character} dialogue={sceneItem} />;
            case "PARENTHETICAL":
                return (
                    <Parenthetical
                        parenthetical={sceneItem}
                        character={character}
                    />
                );
            default:
                break;
        }
    };

    return (
        <SceneComponentContainer onClick={onClick}>
            {getDialogueComponent()}
        </SceneComponentContainer>
    );
}

export default SceneComponent;
