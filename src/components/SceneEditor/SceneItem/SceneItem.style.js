import styled from "styled-components";
import SceneItemBase from "../../scenecomponents/SceneItem.style";
import { characterColors } from "../../../data/characterdata";

/*************** SCENE ITEM *************** */

const SceneItemContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
`;

/*************** SCENE ITEM EDIT MODE*************** */

const SceneItemEditContainer = styled(SceneItemBase)`
    width: 100%;
    grid-column: 2 / -2;
    padding: 0.2em;

    display: flex;
    flex-direction: column;

    position: relative;

    & .CloseButton {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        padding: 0.2rem 0.4rem;
    }

    & .EditButtons {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 0.8em;
    }
`;

/*************** CHARACTER SELECTION *************** */

const CharacterSelectionContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.8rem;
`;

const CharacterItem = styled.div`
    color: ${({ theme, actiontext }) =>
        actiontext ? theme.colors.primaryLight : "black"};
    background-color: ${({ theme, selected }) =>
        selected ? theme.colors.highlight : theme.colors.primary};
    background-color: ${({ character }) =>
        character ? characterColors[character.colorIndex] : "black"};
    padding: 0.4em;

    border: ${({ theme, selected }) =>
        selected
            ? `3px solid ${theme.colors.highlight}`
            : theme.colors.primary};
    border-radius: 0.4rem;
    outline: 2px solid ${({ theme }) => theme.colors.primaryLight};
    font-size: ${({ theme }) => theme.fonts.fontSizes.blockSmall};
    font-family: ${({ theme }) => theme.fonts.serif};
`;

export {
    SceneItemContainer,
    SceneItemEditContainer,
    CharacterSelectionContainer,
    CharacterItem,
};
