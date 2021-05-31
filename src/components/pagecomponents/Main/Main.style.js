import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100%;
`;

const MainContainer = styled.div`
    display: flex;
    flex-direction: ${(props) => props.flex};
    gap: 0.8rem;
    height: 90vh;

    background-color: ${(props) => props.theme.colors.background};
    margin: 1.6rem;
`;

const EditorContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const EditorContainer = styled.div`
    padding: 1.6em 0.8em;
    border: 1px solid black;
    overflow: scroll;
`;

const AnimationContentContainer = styled.div`
    width: 100%;
    border: 1px solid black;
`;

export {
    Container,
    MainContainer,
    EditorContentContainer,
    EditorContainer,
    AnimationContentContainer,
};
