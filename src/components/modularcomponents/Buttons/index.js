import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.button`
    background-color: ${({ theme, highlighted }) =>
        highlighted ? theme.colors.highlight : theme.colors.primaryLight};
    display: inline-block;

    font-size: ${({ theme }) => theme.fonts.fontSizes.base};
    padding: 0.4em;
    margin: 0.4em;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    border-radius: ${({ round }) => (round ? "50%" : "1em")};
    box-shadow: 2px 2px 4px black;
    width: ${({ round }) => (round ? "4.5rem" : "")};
    height: ${({ round }) => (round ? "4.5rem" : "")};

    &:hover {
        cursor: pointer;
        transform: scale(1.03);
    }
`;

function Button({ children, onClick, highlighted, round }) {
    return (
        <ButtonContainer
            round={round}
            highlighted={highlighted}
            onClick={onClick}
        >
            {children}
        </ButtonContainer>
    );
}

export default Button;
