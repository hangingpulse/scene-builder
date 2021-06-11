import styled from "styled-components";
import { motion } from "framer-motion";

const ColorSelectionContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 0.4em;
    padding: 0.2em;
`;

const ColorButton = styled(motion.div)`
    width: 1.5rem;
    height: 1.5rem;
    background-color: ${(props) => props.color};
    border-radius: 50%;
    margin: 0.5rem 0.5rem;

    &::after {
        position: absolute;
        content: "";
        visibility: ${(props) => (props.selected ? "visible" : "hidden")};
        width: 1.9rem;
        height: 1.9rem;
        border-radius: 50%;
        transform: translate(-0.38rem, -0.38rem);
        border: 2px solid white;
    }
`;

export { ColorSelectionContainer, ColorButton };
