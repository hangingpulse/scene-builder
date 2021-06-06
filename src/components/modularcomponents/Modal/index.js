import React from "react";
import { ModalBackground, ModalContainer } from "./Modal.style";

function Modal({ children, onClick }) {
    return (
        <ModalBackground onClick={onClick}>
            <ModalContainer>{children}</ModalContainer>
        </ModalBackground>
    );
}

export default Modal;
