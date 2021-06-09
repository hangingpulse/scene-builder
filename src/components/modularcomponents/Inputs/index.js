import React, { useState } from "react";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import {
    InputContainer,
    TextAreaContainer,
    NumberInputContainer,
    NumberInputLabel,
    NumberInputValue,
    NumberInputButtons,
    ButtonDown,
    ButtonUp,
} from "./Input.style";

function Input({ value, onChange }) {
    return <InputContainer value={value} onChange={onChange} />;
}

function TextArea({ value, onChange, height }) {
    return (
        <TextAreaContainer value={value} onChange={onChange} height={height} />
    );
}

function NumberInput({
    value,
    setValue,
    children,
    animate,
    initial,
    transition,
    range,
}) {
    return (
        <NumberInputContainer
            animate={animate}
            initial={initial}
            transition={transition}
        >
            <NumberInputLabel>{children}</NumberInputLabel>
            <NumberInputValue>{Math.round(value * 10) / 10}</NumberInputValue>
            <NumberInputLabel>s</NumberInputLabel>
            <NumberInputButtons>
                <ButtonUp>
                    <FaCaretUp
                        className="Icon"
                        onClick={() =>
                            value < range.top
                                ? setValue(value + 0.1)
                                : range.top
                        }
                    />
                </ButtonUp>
                <ButtonDown>
                    <FaCaretDown
                        className="Icon"
                        onClick={() =>
                            value > range.bottom
                                ? setValue(value - 0.1)
                                : range.bottom
                        }
                    />
                </ButtonDown>
            </NumberInputButtons>
        </NumberInputContainer>
    );
}

export { Input, TextArea, NumberInput };
