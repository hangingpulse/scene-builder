import styled from "styled-components";
import { motion } from "framer-motion";
import { characterColors } from "../../data/characterdata";

const SceneItemBase = styled(motion.div)`
    padding: 0.3em;
    border: 2px solid black;
    border-radius: ${({ character }) => (character ? "0.5em" : "0rem")};
    box-shadow: ${({ theme }) => theme.boxShadows.animationText};

    max-width: 30ch;
    background-color: ${({ character, theme }) =>
        character
            ? characterColors[character.colorIndex]
            : theme.colors.primary};
    font-size: ${(props) => props.theme.fonts.fontSizes.blockLarge};
    font-family: ${(props) => props.theme.fonts.sansSerif};
`;

export default SceneItemBase;
