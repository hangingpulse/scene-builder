import styled from "styled-components";

const ModalBackground = styled.div`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 100;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContainer = styled.div`
    border: 2px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
`;

export { ModalBackground, ModalContainer };
