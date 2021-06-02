import React from "react";
import styled from "styled-components";
import Dialogue from "../scenecomponents/Dialogue";
import Actiontext from "../scenecomponents/Actiontext";
import Parenthetical from "../scenecomponents/Parenthetical";

// This Component is the Wrapper for every Scene Item
// There might be two different versions, depending on whether it is an Animation Item or a Scene Editor Item

// Container Styles, maybe outsource it into a styles.js
const SceneComponentContainer = styled.div`
    position: ${(props) => (props.animation ? "absolute" : "")};
    top: ${(props) => props.theme.animationPositions[props.index].top};
    bottom: ${(props) => props.theme.animationPositions[props.index].bottom};
    right: ${(props) => props.theme.animationPositions[props.index].right};
    left: ${(props) => props.theme.animationPositions[props.index].left};
    transform: translateY(
        ${(props) => props.theme.animationPositions[props.index].translateY}
    );
    transform-origin: center;

    width: 100%;
    max-width: 25rem;
    grid-area: ${(props) =>
        props.index === "text0" ? "2 / 2 / 4 / 3" : props.index};
    display: flex;
    justify-content: center;
    align-items: center;
`;

function SceneComponent({ sceneItem, character, animation }) {
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
        <SceneComponentContainer
            index={character ? character.id : 0}
            animation={animation}
        >
            {getDialogueComponent()}
        </SceneComponentContainer>
    );
}

export default SceneComponent;
