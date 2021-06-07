import styled from "styled-components";
import { StyledCharacter } from "../../scenecomponents/Character/Character.style";

const SceneElementsEditorContainer = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-areas:
        "head head head"
        "char0 . char1"
        "char2 . char3";
    gap: 0.8em;
    grid-template-columns: minmax(10rem, 15rem) minmax(auto, 15rem) minmax(
            10rem,
            15rem
        );
    grid-template-rows: 3rem repeat(2, minmax(20rem, 40%));

    padding: 1.2em;
    background-color: ${({ theme }) => theme.colors.background};
`;

const HeaderInputContainer = styled.div`
    width: 100%;
    grid-area: head;
    align-self: center;
    display: flex;
`;

const CharacterEditContainer = styled.div`
    width: 100%;
    height: 100%;

    & .ImageSelection {
        display: flex;
        align-items: center;
    }

    & .NameAndDelete {
        display: flex;
    }

    &:hover {
        cursor: pointer;
    }
`;

const StyledCharacterEdit = styled(StyledCharacter)`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 1rem;

    border-width: 5px;
`;

export {
    SceneElementsEditorContainer,
    CharacterEditContainer,
    HeaderInputContainer,
    StyledCharacterEdit,
};
