import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const StyledActiontext = styled(motion.div)`
    width: 20rem;
    margin: 0.3em auto;
    padding: 0.3em;
    border: 2px solid black;
    background-color: ${(props) => props.theme.colors.primaryLight};
    font-family: ${(props) => props.theme.fonts.sansSerif};
`;

function Actiontext({ actiontext }) {
    return <StyledActiontext>{actiontext.text}</StyledActiontext>;
}

export default Actiontext;
