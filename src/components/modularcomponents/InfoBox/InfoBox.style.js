import styled from "styled-components";

const InfoBoxContainer = styled.div`
    width: 60%;
    min-width: 30rem;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.4em;

    padding-bottom: 1.2em;
    overflow: hidden;
    font-family: ${({ theme }) => theme.fonts.serif};
    background-color: ${({ theme }) => theme.colors.primaryLight};
    border: 2px solid black;
    border-radius: 1.2em;
`;

const InfoBoxHeaderContainer = styled.h2`
    width: 100%;
    padding: 0.4em;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.highlight};
    font-size: ${({ theme }) => theme.fonts.fontSizes.header2};
`;

const InfoboxTextContainer = styled.p`
    max-width: 95%;

    padding: 0.8em;
    margin: ${({ highlighted }) => (highlighted ? "0.8em" : "")};
    border-radius: 0.8em;

    color: ${({ highlighted }) => (highlighted ? "white" : "black")};
    background-color: ${({ theme, highlighted }) =>
        highlighted ? theme.colors.primary : theme.colors.primaryLight};
    font-size: ${({ theme, large }) =>
        large
            ? theme.fonts.fontSizes.blockLarge
            : theme.fonts.fontSizes.baseSmall};
`;

const InfoBoxImageContainer = styled.img`
    width: ${({ width }) => width};
    margin: 0.4em;
`;

export {
    InfoBoxContainer,
    InfoBoxHeaderContainer,
    InfoboxTextContainer,
    InfoBoxImageContainer,
};
