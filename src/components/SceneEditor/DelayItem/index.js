import React, { useState } from "react";
import { DelayItemContainer, EditPause } from "./DelayItem.style";
import { NumberInput } from "../../modularcomponents/Inputs";

function DelayItem({ index, sceneItemAfter, sceneItemBefore }) {
    const [hover, setHover] = useState(false);

    return (
        <DelayItemContainer
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            whileHover={{ opacity: 1, height: "5rem" }}
        >
            <EditPause>
                {hover ? (
                    <NumberInput
                        value={sceneItemAfter ? sceneItemAfter.delay : 0}
                    >
                        Pause
                    </NumberInput>
                ) : sceneItemAfter ? (
                    sceneItemAfter.delay
                ) : (
                    0
                )}
            </EditPause>
        </DelayItemContainer>
    );
}

export default DelayItem;
