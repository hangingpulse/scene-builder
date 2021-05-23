import styled from "styled-components";

const MainContainer = styled.div`
    width: 100%;
    min-height: 80vh;
    background-color: ${(props) => props.theme.colors.background};
`;

const TabBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.5rem;
`;

const TabItem = styled.div`
    margin: 1rem 1rem;
    padding: 0.2em;
    cursor: pointer;
    border: ${(props) => (props.active === "active" ? "1px solid black" : "")};
`;

export { MainContainer, TabBar, TabItem };
