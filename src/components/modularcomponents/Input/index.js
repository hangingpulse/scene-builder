import React from "react";
import { InputContainer, TextAreaContainer } from "./Input.style";

function Input({ value, onChange }) {
    return <InputContainer value={value} onChange={onChange} />;
}

function TextArea({ value, onChange }) {
    return <TextAreaContainer value={value} onChange={onChange} />;
}

export { Input, TextArea };
