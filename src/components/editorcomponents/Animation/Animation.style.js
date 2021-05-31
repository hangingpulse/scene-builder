import styled from "styled-components";

const AnimationContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-areas:
        "char1 text1 char2"
        "char1 text2 char2"
        "char3 text3 char4"
        "char3 text4 char4";
    grid-template-columns: 1fr 1fr 1fr;

    justify-content: center;
    align-items: center;
`;

const CharacterContainerAnimation = styled.div`
    grid-area: ${(props) => props.index};
`;

const DialogueContainer = styled.div`
    width: 80%;
    height: 8rem;
    grid-area: ${(props) =>
        props.index === "text0" ? "2 / 2 / 4 / 3" : props.index};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export { AnimationContainer, CharacterContainerAnimation, DialogueContainer };
