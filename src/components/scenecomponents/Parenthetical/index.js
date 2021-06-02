import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { characterColors } from "../../../data/characterdata";

const StyledParenthetical = styled(motion.div)`
    width: 10rem;
    padding: 0.3em;
    margin: 0.3em;
    font-size: ${(props) => props.theme.fonts.fontSizes.base};
    font-family: ${(props) => props.theme.fonts.sansSerif};
    border: 2px solid ${(props) => characterColors[props.character.colorIndex]};
    border-radius: 0.5rem;
    background-color: ${(props) => props.theme.colors.primaryLight};
`;

function Parenthetical({ parenthetical, character }) {
    return (
        <StyledParenthetical character={character}>
            {parenthetical.text}
        </StyledParenthetical>
    );
}

export default Parenthetical;
