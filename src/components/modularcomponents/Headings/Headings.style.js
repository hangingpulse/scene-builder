import styled from "styled-components";

const SmallHeadingContainer = styled.h3`
    width: 100%;
    font-family: ${({ theme }) => theme.fonts.serif};
    font-size: ${({ theme }) => theme.fonts.fontSizes.header2Small};
    text-align: center;
    background-color: ${({ theme, highlight }) =>
        highlight ? theme.colors.highlight : theme.colors.primaryLight};
`;

const SectionHeadingContainer = styled.h2`
    width: 100%;
    padding: 0.4em;
    font-family: ${({ theme }) => theme.fonts.serif};
    font-size: ${({ theme }) => theme.fonts.fontSizes.sectionHeading};
    text-align: center;
`;

const TitleHeadingContainer = styled.h1`
    width: 100%;
    padding: 0.4em;
    font-size: ${({ theme }) => theme.fonts.fontSizes.title};
    font-family: ${({ theme }) => theme.fonts.serif};
    text-align: center;
    text-transform: uppercase;
    background-color: ${({ theme }) => theme.colors.primaryLight};
`;

export {
    SmallHeadingContainer,
    TitleHeadingContainer,
    SectionHeadingContainer,
};
