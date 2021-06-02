import styled from "styled-components";

const AnimationContainer = styled.div`
    width: 100%;
    height: 50%;
    display: grid;
    grid-template-areas:
        "char1 text char2"
        "char3 text char4";
    grid-template-columns: 1fr minmax(15rem, 2fr) 1fr;
    grid-template-rows: 1fr 1fr;
    column-gap: 0.6rem;

    justify-content: center;
    align-items: center;
    justify-items: center;

    border: 1px solid black;
`;

const CharacterContainerAnimation = styled.div`
    grid-area: ${(props) => props.index};
    padding: 1.2rem;
`;

const SceneContentAnimation = styled.div`
    position: relative;
    height: 90%;
    width: 100%;
    grid-column: 2 / 3;
    grid-row: 1 / 5;

    border: 1px solid black;
`;

export {
    AnimationContainer,
    CharacterContainerAnimation,
    SceneContentAnimation,
};
