import styled from "styled-components";
import { motion } from "framer-motion";
import { characterColors } from "../../../data/characterdata";

const StyledSpeechbubble = styled(motion.div)`
    width: 15rem;
    padding: 0.5em;
    margin: 1em;
    margin-left: ${(props) => `calc(${props.character.position * 40}% + 1em)`}
    font-size: 1rem;
    font-family: ${(props) => props.theme.fonts.sansSerif};
    border: 2px solid ${(props) => characterColors[props.character.colorIndex]};
    border-radius: 0.5rem;
    background-color: ${(props) => props.theme.colors.primaryLight};

    &:hover {
        transform: scale(1.05);
        transition: transform 0.1s;
        cursor: pointer;
    }
`;

export default StyledSpeechbubble;
