import styled from "styled-components";
import { motion } from "framer-motion";

const StyledSpeechbubble = styled(motion.div)`
    width: 15rem;
    padding: 0.5em;
    margin: 1em;
    margin-right: ${(props) => (props.leftBubble ? "auto" : "1em")};
    margin-left: ${(props) => (props.leftBubble ? "1em" : "auto")};
    font-size: 1rem;
    font-family: ${(props) => props.theme.fonts.sansSerif};
    border: 1px solid black;
    background-color: ${(props) => props.theme.colors.secondary};
`;

export default StyledSpeechbubble;
