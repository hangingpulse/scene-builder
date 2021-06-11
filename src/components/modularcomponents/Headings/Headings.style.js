import styled from "styled-components";

const SmallHeadingContainer = styled.h3`
    width: 100%;
    font-size: ${({ theme }) => theme.fonts.fontSizes.header2Small};
    text-align: center;
    background-color: ${({ theme, highlight }) =>
        highlight ? theme.colors.highlight : theme.colors.primaryLight};
    position: ${({ position }) => position};
`;

export { SmallHeadingContainer };
