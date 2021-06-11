import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// This component turns a scene component into an animated component by wrapping it

const AnimationPlayingContainer = styled(motion.div)`
    position: absolute;
    top: ${(props) => props.theme.animationPositions[props.position].top};
    bottom: ${(props) => props.theme.animationPositions[props.position].bottom};
    transform: translate(
        ${({ theme, position }) =>
            theme.animationPositions[position].translateX},
        ${(props) => props.theme.animationPositions[props.position].translateY}
    );
    transform-origin: center;
    display: flex;
    justify-content: ${({ position }) => {
        if (position === 1 || position === 3) {
            return "flex-start";
        }
        if (position === 2 || position === 4) {
            return "flex-end";
        }
        return "center";
    }};
    align-items: center;
    width: 100%;
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
