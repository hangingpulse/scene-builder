import React, { useContext } from "react";
import { SceneContext } from "../../../context/SceneContextProvider";
import styled from "styled-components";
import { motion } from "framer-motion";

// This component turns a scene component into an animated component by wrapping it

const AnimationComponentWrapper = styled(motion.div)`
    position: absolute;
    top: 15%;
    right: 15%;
`;

function AnimatedComponent({
    children,
    controls,
    totalDelay,
    duration,
    setAnimationIndex,
}) {
    return (
        <AnimationComponentWrapper
            animate={controls}
            initial={{ opacity: 0 }}
            custom={{
                delay: totalDelay,
                duration: duration,
            }}
            onAnimationComplete={() => {
                setAnimationIndex((prevState) => prevState + 1);
            }}
        >
            {children}
        </AnimationComponentWrapper>
    );
}

export default AnimatedComponent;
