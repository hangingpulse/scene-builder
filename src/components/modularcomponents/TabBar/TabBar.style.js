import styled from "styled-components";

const TabBarContainer = styled.div`
    display: flex;

    justify-content: space-evenly;
    align-items: center;

    font-size: ${(props) => props.theme.fonts.fontSizes.blockLarge};
`;

const TabItem = styled.div`
    width: 100%;
    height: 100%;

    padding: 0.4rem;
    cursor: pointer;
    background-color: ${(props) =>
        props.active
            ? props.theme.colors.highlight
            : props.theme.colors.primaryLight};
    text-align: center;
    border: 1px solid black;
    border-bottom: 0px;
    border-radius: 1rem 1rem 0 0;

    font-family: ${(props) => props.theme.fonts.serif};
`;

export { TabBarContainer, TabItem };
