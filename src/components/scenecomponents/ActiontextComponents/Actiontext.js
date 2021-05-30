import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const StyledActiontext = styled(motion.div)`
    width: 20rem;
    margin: 0 auto;
`;

function Actiontext({ actiontext }) {
    return <StyledActiontext>{actiontext.text}</StyledActiontext>;
}

export default Actiontext;
