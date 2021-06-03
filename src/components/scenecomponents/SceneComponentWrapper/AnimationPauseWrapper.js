import React from "react";
import styled from "styled-components";

// This Component is the Wrapper for every Scene Item
// There might be two different versions, depending on whether it is an Animation Item or a Scene Editor Item

// Container Styles, maybe outsource it into a styles.js
const AnimationPauseContainer = styled.div`
    position: absolute;
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
    display: flex;
    justify-content: center;
    align-items: center;
`;

function AnimationPauseWrapper({ characterIndex, children }) {
    return (
        <AnimationPauseContainer index={characterIndex}>
            {children}
        </AnimationPauseContainer>
    );
}

export default AnimationPauseWrapper;
