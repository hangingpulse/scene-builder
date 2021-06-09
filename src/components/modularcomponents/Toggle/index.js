import React, { useState } from "react";
import {
    ToggleContainer,
    ToggleSwitch,
    ToggleLabel,
    ToggleSwitchContainer,
} from "./Toggle.style";

function Toggle({ children, onClick, width, value }) {
    return (
        <ToggleContainer width={width}>
            {children ? <ToggleLabel>{children}</ToggleLabel> : null}
            <ToggleSwitchContainer onClick={onClick} value={value}>
                <ToggleSwitch />
            </ToggleSwitchContainer>
        </ToggleContainer>
    );
}

export default Toggle;
