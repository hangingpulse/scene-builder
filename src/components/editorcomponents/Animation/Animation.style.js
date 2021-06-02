import styled from "styled-components";

const AnimationContainer = styled.div`
    width: 100%;
    height: 50%;
    display: grid;
    grid-template-areas:
        "char1 text1 char2"
        "char1 text2 char2"
        "char3 text3 char4"
        "char3 text4 char4";
    grid-template-columns: 1fr 1fr 1fr;

    justify-content: center;
    align-items: center;

    border: 1px solid black;
`;

const CharacterContainerAnimation = styled.div`
    grid-area: ${(props) => props.index};
`;

const SceneContentAnimation = styled.div`
    grid-area: 2 / 1 / 3 / 5;
`;

export {
    AnimationContainer,
    CharacterContainerAnimation,
    SceneContentAnimation,
};
