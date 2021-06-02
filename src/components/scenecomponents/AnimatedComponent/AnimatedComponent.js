import React, { useContext } from "react";
import { SceneContext } from "../../../context/SceneContextProvider";
import styled from "styled-components";
import { motion } from "framer-motion";

// This component turns a scene component into an animated component by wrapping it

const AnimationComponentWrapper = styled(motion.div)`
    position: absolute;
`;

function AnimatedComponent({
    children,
    controls,
    delay,
    duration,
    onAnimationComplete,
    animationItemIndex,
    setAnimationItemIndex,
}) {
    return (
        <AnimationComponentWrapper
            animate={controls}
            initial={{ opacity: 0, visibility: "visible" }}
            custom={{
                delay: delay,
                duration: duration,
            }}
            onAnimationComplete={() => {
                onAnimationComplete();
                console.log(animationItemIndex);
                setAnimationItemIndex((prevState) => prevState + 1);
            }}
        >
            {children}
        </AnimationComponentWrapper>
    );
}

export default AnimatedComponent;
