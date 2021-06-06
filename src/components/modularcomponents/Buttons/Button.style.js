import styled from "styled-components";

const ButtonContainer = styled.div`
    background-color: ${({ theme, highlighted }) =>
        highlighted ? theme.colors.highlight : theme.colors.secondary};
    display: inline-flex;
    justify-content: center;
    align-items: center;

    font-size: ${({ theme }) => theme.fonts.fontSizes.base};
    padding: 0.2em;
    margin: 0.4em;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    border-radius: 0.5em;
    box-shadow: 0.1em 0.1em 0.4em black;
    width: ${({ square }) => (square ? square : "")};
    height: ${({ square }) => (square ? square : "")};

    &:hover {
        cursor: pointer;
        transform: scale(1.03);
    }
`;

const IconButtonContainer = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 0.4em;

    border-radius: 0.4rem;

    background-color: ${({ theme, background }) =>
        background && theme.colors.primary};

    &:hover {
        cursor: pointer;
        transform: scale(1.03);
    }

    & .Icon {
        color: ${(props) => props.theme.colors.highlight};
    }
`;

export { ButtonContainer, IconButtonContainer };
