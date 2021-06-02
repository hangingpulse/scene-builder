import styled from "styled-components";

const AnimationContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-areas:
        "head head head"
        "char1 text char2"
        "char3 text char4";
    grid-template-columns: 1fr minmax(15rem, 2fr) 1fr;
    grid-template-rows: 10% 1fr 1fr;
    column-gap: 0.6rem;
    padding: 0.6rem 0;

    align-items: center;
    justify-items: center;
    border: 1px solid black;
`;

const AnimationHeader = styled.div`
    grid-area: head;

    width: 100%;
    font-size: 2rem;
    text-align: center;
`;

const CharacterContainerAnimation = styled.div`
    grid-area: ${(props) => props.index};
    padding: 1.2rem;
`;

const SceneContentAnimation = styled.div`
    position: relative;
    height: 80%;
    width: 100%;
    grid-column: 2 / 3;
    grid-row: 1 / 5;
`;

export {
    AnimationContainer,
    CharacterContainerAnimation,
    SceneContentAnimation,
    AnimationHeader,
};
