import styled from "styled-components";
import { motion } from "framer-motion";
import { characterColors } from "../../data/characterdata";

const SceneItemBase = styled(motion.div)`
    padding: 0.3em;
    border: 4px solid
        ${({ character }) =>
            character ? characterColors[character.colorIndex] : "black"};
    background-color: ${({ character }) =>
        character ? characterColors[character.colorIndex] : "black"};
    font-size: ${(props) => props.theme.fonts.fontSizes.base};
    font-family: ${(props) => props.theme.fonts.sansSerif};
    border-radius: ${({ character }) => (character ? "0.5em" : "0rem")};
`;

export default SceneItemBase;
