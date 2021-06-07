import styled from "styled-components";
import { motion } from "framer-motion";

const DelayItemContainer = styled(motion.div)`
    width: 30%;
    height: ${({ height }) => (height ? height : "1rem")};
    margin: 0.3em auto;
    border: 1px dotted black;
    border-radius: 0.4em;
    background-color: ${(props) => props.theme.colors.primaryLight};
    opacity: 0.5;

    font-size: ${({ theme }) => theme.fonts.fontSizes.blockSmall};
    text-align: center;

    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const EditPause = styled.div``;

export { DelayItemContainer, EditPause };
