import React from "react";
import { IoMdClose } from "react-icons/io";
import { TiPlusOutline } from "react-icons/ti";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
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

function DeleteButton({ onClick, background }) {
    return (
        <IconButtonContainer onClick={onClick} background={background}>
            <FaTrashAlt className="Icon" />
        </IconButtonContainer>
    );
}

function EditButton({ onClick, size }) {
    return (
        <IconButtonContainer onClick={onClick}>
            <FaEdit className="Icon" size="4rem" />
        </IconButtonContainer>
    );
}

function AddButton({ onClick, size }) {
    return (
        <IconButtonContainer onClick={onClick}>
            <TiPlusOutline size={size} />
        </IconButtonContainer>
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
export { CloseButton, DeleteButton, EditButton, AddButton };
