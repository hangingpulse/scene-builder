import React from "react";
import { ModalBackground, ModalContainer } from "./Modal.style";

function Modal({ children, toggleModal }) {
    return (
        <ModalBackground
            onClick={(e) => e.target === e.currentTarget && toggleModal(false)}
        >
            <ModalContainer>{children}</ModalContainer>
        </ModalBackground>
    );
}

export default Modal;
