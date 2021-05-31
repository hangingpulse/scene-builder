import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { characterColors } from "../../../data/characterdata";

const StyledParenthetical = styled(motion.div)`
    width: 10rem;
    padding: 0.3em;
    margin: 0.3em;
    margin-left: ${(props) => `calc(${props.character.position * 40}% + 1em)`};
    font-size: 1rem;
    font-family: ${(props) => props.theme.fonts.sansSerif};
    border: 2px solid ${(props) => characterColors[props.character.colorIndex]};
    border-radius: 0.5rem;
    background-color: ${(props) => props.theme.colors.primaryLight};
`;

function Parenthetical({ parenthetical }) {
    return (
        <StyledParenthetical character={parenthetical.character}>
            {parenthetical.text}
        </StyledParenthetical>
    );
}

export default Parenthetical;
