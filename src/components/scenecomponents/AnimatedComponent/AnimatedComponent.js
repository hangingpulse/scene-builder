import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const AnimationComponentWrapper = styled(motion.div)`
    display: none;
`;

function AnimatedComponent({ children, controls, totalDelay, duration }) {
    return (
        <AnimationComponentWrapper
            controls={controls}
            animate={controls}
            initial={{ opacity: 0, display: "block" }}
            custom={{
                delay: totalDelay - duration,
                duration: duration,
            }}
        >
            {children}
        </AnimationComponentWrapper>
    );
}

export default AnimatedComponent;
