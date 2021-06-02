import React from "react";
import styled from "styled-components";
import Dialogue from "../scenecomponents/Dialogue";
import Actiontext from "../scenecomponents/Actiontext";
import Parenthetical from "../scenecomponents/Parenthetical";

// This Component is the Wrapper for every Scene Item
// There might be two different versions, depending on whether it is an Animation Item or a Scene Editor Item

// Container Styles, maybe outsource it into a styles.js
const SceneComponentContainer = styled.div`
    width: 80%;
    height: 8rem;
    grid-area: ${(props) =>
        props.index === "text0" ? "2 / 2 / 4 / 3" : props.index};
    display: flex;
    justify-content: center;
    align-items: center;
`;

function SceneComponent({ sceneItem, character }) {
    // fills the wrapper with the needed scene item
    const getDialogueComponent = () => {
        switch (sceneItem.type) {
            case "ACTIONTEXT":
                return <Actiontext actiontext={sceneItem} animation />;
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
        <SceneComponentContainer index={`text${character ? character.id : 0}`}>
            {getDialogueComponent()}
        </SceneComponentContainer>
    );
}

export default SceneComponent;
