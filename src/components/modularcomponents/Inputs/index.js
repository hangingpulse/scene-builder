import React from "react";
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

function TextArea({ value, onChange, height, maxChar, small }) {
    return (
        <TextAreaContainer
            small={small}
            value={
                value.length <= maxChar - 1
                    ? value
                    : value.substring(0, maxChar - 1)
            }
            onChange={onChange}
            height={height}
        />
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
            <NumberInputValue>{value / 10}</NumberInputValue>
            <NumberInputLabel>s</NumberInputLabel>
            <NumberInputButtons>
                <ButtonUp>
                    <FaCaretUp
                        className="Icon"
                        onClick={() =>
                            value < range.top * 10
                                ? setValue(value + 1)
                                : range.top * 10
                        }
                    />
                </ButtonUp>
                <ButtonDown>
                    <FaCaretDown
                        className="Icon"
                        onClick={() =>
                            value > range.bottom * 10
                                ? setValue(value - 1)
                                : range.bottom * 10
                        }
                    />
                </ButtonDown>
            </NumberInputButtons>
        </NumberInputContainer>
    );
}

export { Input, TextArea, NumberInput };
