import styled from "styled-components";
import { motion } from "framer-motion";

const DelayItemContainer = styled(motion.div)`
    width: 80%;
    margin: 0.3em auto;
    padding: 0.2em;
    border: 1px dotted black;
    border-radius: 0.4em;
    background-color: ${(props) => props.theme.colors.primaryLight};
    opacity: 0.5;

    font-size: ${({ theme }) => theme.fonts.fontSizes.blockSmall};
    text-align: center;

    display: flex;

    &:hover {
        opacity: 1;
    }
`;

const EditPause = styled.div``;

export { DelayItemContainer, EditPause };
