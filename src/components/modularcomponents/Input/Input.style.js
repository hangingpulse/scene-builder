import styled from "styled-components";

const InputContainer = styled.input`
    width: 100%;
`;

const TextAreaContainer = styled.textarea`
    margin: 0.2em;
    padding: 0.2rem;
    width: 90%;
    height: ${({ height }) => (height ? height : "")};
    resize: none;

    background-color: white;
    border: 1px solid black;
    border-radius: 0.3em;

    font-size: ${({ theme }) => theme.fonts.fontSizes.base};
    font-family: ${(props) => props.theme.fonts.sansSerif};

    &:focus {
        outline: none;
        border: 2px solid ${({ theme }) => theme.colors.highlight};
    }
`;

export { TextAreaContainer, InputContainer };
