import React from "react";
import {
    ToggleContainer,
    ToggleSwitch,
    ToggleLabel,
    ToggleSwitchContainer,
} from "./Toggle.style";

function Toggle({ labelOn, labelOff, onClick, width, value }) {
    return (
        <ToggleContainer width={width}>
            {labelOff ? <ToggleLabel>{labelOff}</ToggleLabel> : null}
            <ToggleSwitchContainer onClick={onClick} value={value}>
                <ToggleSwitch />
            </ToggleSwitchContainer>
            {labelOn ? <ToggleLabel>{labelOn}</ToggleLabel> : null}
        </ToggleContainer>
    );
}

export default Toggle;
