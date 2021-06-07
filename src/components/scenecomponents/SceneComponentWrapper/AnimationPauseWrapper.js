import React from "react";
import styled from "styled-components";

// This Component is the Wrapper for every Scene Item
// There might be two different versions, depending on whether it is an Animation Item or a Scene Editor Item

// Container Styles, maybe outsource it into a styles.js
const AnimationPauseContainer = styled.div`
    position: absolute;
    top: ${(props) => props.theme.animationPositions[props.position].top};
    bottom: ${(props) => props.theme.animationPositions[props.position].bottom};
    right: ${(props) => props.theme.animationPositions[props.position].right};
    left: ${(props) => props.theme.animationPositions[props.position].left};
    transform: translateY(
        ${(props) => props.theme.animationPositions[props.position].translateY}
    );
    transform-origin: center;

    width: 100%;
    max-width: 25rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function AnimationPauseWrapper({ characterIndex, children }) {
    return (
        <AnimationPauseContainer position={characterIndex}>
            {children}
        </AnimationPauseContainer>
    );
}

export default AnimationPauseWrapper;
