import React from "react";
import { ModalBackground, ModalContainer } from "./Modal.style";

function Modal({ children }) {
    return (
        <ModalBackground>
            <ModalContainer>{children}</ModalContainer>
        </ModalBackground>
    );
}

export default Modal;
