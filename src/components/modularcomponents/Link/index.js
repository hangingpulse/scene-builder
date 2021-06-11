import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLinkContainer = styled(Link)`
    text-decoration: none;
    font-family: ${({ theme }) => theme.fonts.serif};
    font-size: ${({ theme }) => theme.fonts.fontSizes.header2Small};
    margin: 0 0.8rem;

    &:visited {
        color: black;
    }
`;

const InlineLinkContainer = styled.a`
    color: ${({ theme }) => theme.colors.highlight};

    &:visited {
        color: ${({ theme }) => theme.colors.highlight};
    }
`;

function InlineLink({ href, children }) {
    return <InlineLinkContainer href={href}>{children}</InlineLinkContainer>;
}

function StyledLink({ children, to }) {
    return <StyledLinkContainer to={to}>{children}</StyledLinkContainer>;
}

export default StyledLink;
export { InlineLink };
