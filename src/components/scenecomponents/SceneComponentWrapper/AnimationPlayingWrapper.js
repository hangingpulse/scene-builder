import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// This component turns a scene component into an animated component by wrapping it

const AnimationPlayingContainer = styled(motion.div)`
    position: absolute;
    top: ${(props) => props.theme.animationPositions[props.index].top};
    bottom: ${(props) => props.theme.animationPositions[props.index].bottom};
    right: ${(props) => props.theme.animationPositions[props.index].right};
    left: ${(props) => props.theme.animationPositions[props.index].left};
    transform: translateY(
        ${(props) => props.theme.animationPositions[props.index].translateY}
    );
    transform-origin: center;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 25rem;
    max-height: 50%;
`;

function AnimationPlayingWrapper({
    children,
    controls,
    totalDelay,
    duration,
    setAnimationIndex,
    characterIndex,
}) {
    return (
        <AnimationPlayingContainer
            animate={controls}
            initial={{ opacity: 0 }}
            custom={{
                delay: totalDelay,
                duration: duration,
            }}
            onAnimationComplete={() => {
                setAnimationIndex((prevState) => prevState + 1);
            }}
            index={characterIndex}
        >
            {children}
        </AnimationPlayingContainer>
    );
}

export default AnimationPlayingWrapper;
