import styled from "styled-components";
import { characterColors } from "../../../data/characterdata";

const DialogueContainer = styled.div`
    width: 100%;
    padding: 0.3em;

    font-size: ${(props) => props.theme.fonts.fontSizes.base};
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

export { DialogueContainer };
