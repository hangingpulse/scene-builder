import React from "react";
import { characterColors } from "../../../data/characterdata";
import styled from "styled-components";
import { motion, AnimateSharedLayout } from "framer-motion";

const ColorSelectionContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

const ColorButton = styled(motion.div)`
    width: 2rem;
    height: 2rem;
    background-color: ${(props) => props.color};
    border-radius: 50%;
    margin: 0.5rem 0.5rem;

    &::after {
        position: absolute;
        content: "";
        visibility: ${(props) => (props.selected ? "visible" : "hidden")};
        width: 2.4rem;
        height: 2.4rem;
        border-radius: 50%;
        transform: translate(-0.4rem, -0.4rem);
        border: 2px solid black;
    }
`;

// const SelectorRing = styled(ColorButton)``;

function ColorSelection({ selectedColor, editCharacterState }) {
    return (
        <ColorSelectionContainer>
            <AnimateSharedLayout>
                {characterColors.map((color, index) => (
                    <ColorButton
                        key={index}
                        color={color}
                        selected={index === selectedColor ? true : false}
                        onClick={() =>
                            editCharacterState({
                                type: "CHANGE COLOR",
                                payload: index,
                            })
                        }
                    ></ColorButton>
                ))}
            </AnimateSharedLayout>
        </ColorSelectionContainer>
    );
}

export default ColorSelection;
