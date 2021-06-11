import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100%;
`;

const MainContainer = styled.div`
    height: 90%;
    display: flex;
    flex-direction: ${(props) => props.flex};
    gap: 0.8rem;

    background-color: ${(props) => props.theme.colors.background};
    background: ${({ theme }) => theme.gradients.background[0]};
    background: ${({ theme }) => theme.gradients.background[1]};
    margin: 0.8em;
`;

const EditorContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

// including the tab bar
const EditorContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 0.8em;

    display: flex;
    flex-direction: column;
    justify-content: center;

    background-color: ${({ theme }) => theme.colors.primary};
    border: 2px solid black;
    border-radius: 0 0 0.8em 0.8em;
    border-top: 0px solid ${({ theme }) => theme.colors.highlight};
    box-shadow: ${({ theme }) => theme.boxShadows.mainContainer};
    overflow: hidden;
`;

export { Container, MainContainer, EditorContentContainer, EditorContainer };
