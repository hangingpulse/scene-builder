import styled from "styled-components";
import { StyledCharacter } from "./Character.style";

const StyledEditCharacter = styled(StyledCharacter)`
    position: fixed;
    width: 18rem;
    height: 18rem;
    left: calc(50% - 9rem);
    top: calc(50% - 9rem);
    z-index: 50;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 1rem;

    border-width: 5px;
`;

const CharacterImageSelector = styled.div`
    display: flex;
    align-items: center;
`;

const CharacterNameInput = styled.input`
    width: 8rem;
    font-family: ${(props) => props.theme.fonts.sansSerif};
`;

export { StyledEditCharacter, CharacterImageSelector, CharacterNameInput };
