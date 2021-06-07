import React from "react";
import { characterColors } from "../../../data/characterdata";
import { AnimateSharedLayout } from "framer-motion";
import {
    ColorButton,
    ColorSelectionContainer,
} from "./ColorSelection.style.js";

// const SelectorRing = styled(ColorButton)``;

function ColorSelection({ selectedColor, changeCharacter }) {
    return (
        <ColorSelectionContainer>
            <AnimateSharedLayout>
                {characterColors.map((color, index) => (
                    <ColorButton
                        key={index}
                        color={color}
                        selected={index === selectedColor ? true : false}
                        onClick={() => changeCharacter("COLOR", index)}
                    ></ColorButton>
                ))}
            </AnimateSharedLayout>
        </ColorSelectionContainer>
    );
}

export default ColorSelection;
