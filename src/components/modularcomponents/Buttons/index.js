import React from "react";
import styled from "styled-components";
import { IoMdClose } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";
import { ButtonContainer, IconButtonContainer } from "./Button.style";

// What Buttons do I need?:

// IconButton without Style
// CloseButton, TrashButton,

function CloseButton({ onClick }) {
    return (
        <IconButtonContainer onClick={onClick}>
            <IoMdClose />
        </IconButtonContainer>
    );
}

function DeleteButton({ onClick, size }) {
    return (
        <ButtonContainer onClick={onClick} square={size} highlighted>
            <FaTrashAlt />
        </ButtonContainer>
    );
}

function Button({ children, onClick, highlighted, square }) {
    return (
        <ButtonContainer
            square={square}
            highlighted={highlighted}
            onClick={onClick}
        >
            {children}
        </ButtonContainer>
    );
}

export default Button;
export { CloseButton, DeleteButton };
