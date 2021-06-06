import React from "react";
import {
    InputContainer,
    TextAreaContainer,
    NumberInputContainer,
    NumberInputLabel,
    NumberInputField,
} from "./Input.style";

function Input({ value, onChange }) {
    return <InputContainer value={value} onChange={onChange} />;
}

function TextArea({ value, onChange, height }) {
    return (
        <TextAreaContainer value={value} onChange={onChange} height={height} />
    );
}

function NumberInput({ value, onChange, children }) {
    return (
        <NumberInputContainer>
            <NumberInputLabel>{children}</NumberInputLabel>
            <NumberInputField
                type="number"
                step="0.1"
                value={value}
                onChange={onChange}
            />
            <NumberInputLabel>s</NumberInputLabel>
        </NumberInputContainer>
    );
}

export { Input, TextArea, NumberInput };
