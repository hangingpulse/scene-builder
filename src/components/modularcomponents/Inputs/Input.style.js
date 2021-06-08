import styled from "styled-components";
import { motion } from "framer-motion";

/********************* TEXT INPUT COMPONENT ***************** */

const InputContainer = styled.input`
    width: 100%;
`;

/********************* TEXTAREA COMPONENT ***************** */

const TextAreaContainer = styled.textarea`
    margin: 0.2em;
    padding: 0.2em;
    width: 90%;
    height: calc(${({ theme }) => theme.fonts.fontSizes.base} + 0.7em);
    resize: none;

    background-color: white;
    border: 1px solid black;
    border-radius: 0.3em;

    font-size: ${({ theme }) => theme.fonts.fontSizes.base};
    font-family: ${(props) => props.theme.fonts.sansSerif};

    &:focus {
        outline: none;
        border: 2px solid ${({ theme }) => theme.colors.highlight};
    }
`;

/********************* NUMBER INPUT COMPONENT ***************** */

const NumberInputContainer = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.8rem;

    padding: 0.4rem;

    border-radius: 0.4rem;
    background-color: ${({ theme }) => theme.colors.primary};
`;

const NumberInputLabel = styled.div`
    color: ${({ theme }) => theme.colors.primaryLight};

    font-size: ${({ theme }) => theme.fonts.fontSizes.blockSmall};
    font-family: ${(props) => props.theme.fonts.serif};
`;

const NumberInputValue = styled.span`
    padding: 0.2em;
    color: white;
    font-size: ${({ theme }) => theme.fonts.fontSizes.blockSmall};
    font-family: ${(props) => props.theme.fonts.serif};
`;

export {
    TextAreaContainer,
    InputContainer,
    NumberInputContainer,
    NumberInputLabel,
    NumberInputValue,
};
