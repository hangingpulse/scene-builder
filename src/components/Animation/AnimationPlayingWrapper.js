import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// This component turns a scene component into an animated component by wrapping it

const AnimationPlayingContainer = styled(motion.div)`
    position: absolute;
    top: ${(props) => props.theme.animationPositions[props.position].top};
    bottom: ${(props) => props.theme.animationPositions[props.position].bottom};
    right: ${(props) => props.theme.animationPositions[props.position].right};
    left: ${(props) => props.theme.animationPositions[props.position].left};
    transform: translateY(
        ${(props) => props.theme.animationPositions[props.position].translateY}
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
    playAnimation,
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
                playAnimation();
            }}
            position={characterIndex}
        >
            {children}
        </AnimationPlayingContainer>
    );
}

export default AnimationPlayingWrapper;
