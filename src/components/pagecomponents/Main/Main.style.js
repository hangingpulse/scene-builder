import styled from "styled-components";

const MainContainer = styled.div`
    display: flex;
    flex-direction: ${(props) => props.flex};
    width: 100%;
    min-height: 80vh;
    background-color: ${(props) => props.theme.colors.background};
`;

const EditorContainer = styled.div`
    margin: 1.6rem;
    margin-top: 0;
    border: 1px solid black;
    display: flex;
`;

const AnimationContainer = styled.div`
    border: 1px solid black;
    width: 50%;
    height: 100vh;
`;

const TabBar = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    font-size: ${(props) => props.theme.fonts.fontSizes.blockLarge};
    margin: 0 1.6rem;
    border: 1px solid black;
`;

const TabItem = styled.div`
    width: 100%;
    height: 100%;
    margin-right: ${(props) => (props.active ? props.marginRight : "0")};
    margin-left: ${(props) => (props.active ? props.marginLeft : "0")};

    padding: 0.8rem;
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.primaryLight};
    color: ${(props) => (props.active ? "red" : "")};
    text-align: center;
    border: 1px solid black;
    border-bottom: 0px;
    border-radius: 4rem 4rem 0 0;
    z-index: ${(props) => (props.active ? "10" : props.zIndex)};
`;

export { MainContainer, EditorContainer, AnimationContainer, TabBar, TabItem };
