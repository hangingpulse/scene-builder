import React from "react";
import {
    InputContainer,
    TextAreaContainer,
    NumberInputContainer,
    NumberInputLabel,
    NumberInputValue,
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
    onChange,
    children,
    animate,
    initial,
    transition,
}) {
    return (
        <NumberInputContainer
            animate={animate}
            initial={initial}
            transition={transition}
        >
            <NumberInputLabel>{children}</NumberInputLabel>
            <NumberInputValue>{value}</NumberInputValue>
            <NumberInputLabel>s</NumberInputLabel>
        </NumberInputContainer>
    );
}

export { Input, TextArea, NumberInput };
