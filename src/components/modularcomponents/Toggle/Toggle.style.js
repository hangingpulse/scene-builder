import styled from "styled-components";
import { motion } from "framer-motion";

const ToggleContainer = styled(motion.div)`
    width: ${({ width }) => (width ? width : "")};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.4rem;
    padding: 0.4rem;

    border-radius: 0.4rem;
    background-color: ${({ theme }) => theme.colors.primary};
`;

const ToggleSwitchContainer = styled(motion.div)`
    display: flex;
    justify-content: ${({ toggleOn }) =>
        toggleOn ? "flex-end" : "flex-start"};
    align-items: center;

    width: 4rem;
    height: 2.5rem;
    padding: 0.1rem 0.05rem;
    border: 0.2rem solid black;
    border-radius: 0.7rem;
    box-shadow: inset 0 0 0.2rem black;
    background-color: ${({ toggleOn, theme }) =>
        toggleOn ? theme.colors.secondary : theme.colors.highlight};
`;

const ToggleSwitch = styled(motion.div)`
    width: 2rem;

    height: 100%;
    border: 1px solid black;
    border-radius: 0.4em;
    box-shadow: 0px 0px 2px black;
    background-color: ${({ theme }) => theme.colors.primary};
`;

const ToggleLabel = styled(motion.div)`
    color: ${({ theme }) => theme.colors.primaryLight};
    font-size: ${({ theme }) => theme.fonts.fontSizes.blockSmall};
    font-family: ${({ theme }) => theme.fonts.serif};
`;

export { ToggleContainer, ToggleSwitch, ToggleLabel, ToggleSwitchContainer };
