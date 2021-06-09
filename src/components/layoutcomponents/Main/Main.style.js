import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100%;
`;

const MainContainer = styled.div`
    display: flex;
    flex-direction: ${(props) => props.flex};

    background-color: ${(props) => props.theme.colors.background};
    margin: 0.8em;
    margin-top: 10rem;
`;

const EditorContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

// including the tab bar
const EditorContainer = styled.div`
    width: 100%;
    height: 90%;
    padding: 0 0.8em;
    border: 1px solid black;
    border-top: 3px solid ${({ theme }) => theme.colors.highlight};
`;

export { Container, MainContainer, EditorContentContainer, EditorContainer };
