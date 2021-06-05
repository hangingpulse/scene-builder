import React, { useState } from "react";
import {
    ToggleContainer,
    ToggleSwitch,
    ToggleLabel,
    ToggleSwitchContainer,
} from "./Toggle.style";

function Toggle({ children, onClick, width }) {
    const [toggleOn, setToggleOn] = useState(true);

    return (
        <ToggleContainer width={width}>
            {children ? <ToggleLabel>{children}</ToggleLabel> : null}
            <ToggleSwitchContainer onClick={onClick} toggleOn={toggleOn}>
                <ToggleSwitch
                    onClick={() => setToggleOn((prevState) => !prevState)}
                />
            </ToggleSwitchContainer>
        </ToggleContainer>
    );
}

export default Toggle;
