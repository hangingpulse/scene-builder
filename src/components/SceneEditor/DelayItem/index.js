import React, { useState } from "react";
import { DelayItemContainer, EditPause } from "./DelayItem.style";
import { NumberInput } from "../../modularcomponents/Inputs";
import { AddButton } from "../../modularcomponents/Buttons";

function DelayItem({ index, sceneItemAfter, sceneItemBefore }) {
    const [hover, setHover] = useState(false);

    const canHover = window.matchMedia("(hover: hover)").matches;

    return (
        <DelayItemContainer
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={(e) =>
                e.target === e.currentTarget &&
                !canHover &&
                setHover((prevState) => !prevState)
            }
            whileHover={{
                opacity: 1,
                height: "5rem",
                transition: { duration: 0.2 },
            }}
            height={hover && !canHover ? "5rem" : "2rem"}
            opacity={!hover && !canHover ? 0.5 : 1}
        >
            <EditPause>
                {hover ? (
                    <NumberInput
                        value={sceneItemAfter ? sceneItemAfter.delay : 0}
                        initial={{ visibility: "hidden" }}
                        animate={{
                            visibility: "visible",
                        }}
                        transition={{ delay: 0.1 }}
                    >
                        Pause
                    </NumberInput>
                ) : (
                    <div className="PauseInfo">
                        {sceneItemAfter ? sceneItemAfter.delay : 0}s Pause
                    </div>
                )}
            </EditPause>
            <AddButton size={hover ? "3rem" : "2rem"} />
        </DelayItemContainer>
    );
}

export default DelayItem;
